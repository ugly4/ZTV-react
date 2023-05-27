import React, { useState, useRef } from "react";
import "./Match.css"
import MatchHeader from "./MatchHeader/MatchHeader";
import MatchMap from "./MatchMap/MatchMap"
import Streams from "./Streams/Streams"
import Description from "./Description/Description";
import Scoreboard from "./Scoreboard/Scoreboard"
import ScrollLog from "./ScrollLog/ScrollLog"
import Statistic from "./Statistic/Statistic"
import Editor from "../components/Editor/Editor";
import Login from "../Login/Login";


// Компонент - "Страница матча"
function Match(props){

    //Кто находится на странице/ смотрит
    const isAdmin = true;
    const isCap = true;
    ///////////////////////////////////////


    // ------------- Селектор стран ------------
    const countries =[ // База стран
        {name: "Россия", flagPath: "img/flags/mini/Russia.svg"},
        {name: "Остров Мэн", flagPath: "img/flags/mini/IsleOfMan.svg"},
        {name: "Албания", flagPath: "img/flags/mini/Albania.svg"},
        {name: "Испания", flagPath: "img/flags/mini/Spain.svg"},
        {name: "Белиз", flagPath: "img/flags/mini/Belize.svg"},
        {name: "Косово", flagPath: "img/flags/mini/Kosovo.svg"}
    ]

    const [valueCountry, setValueCountry] = useState('Выберите страну'); //"Значение" для селектора страны

    const [selectorCountryActive, setSelectorCountryActive] = useState(false); // Состояния селектора стран

    const toggleClass = () => { // Функция toggle для селектора стран
        setSelectorCountryActive(!selectorCountryActive);
    };
    //--------------------------------------------

    // __________ IP матча (админ) _____________
    let [ipValue, setIpValue] = useState("");
    const [ipMatch, setActiveIpMatch] = useState(false); //Состояние видимости IP адреса
    /////////////////////////////////////////////

    // ___________ Раздел со стримами ____________
    let [streams, setStreams] = useState([]); // стримы
    const [streamsEditorActive, setStreamsEditorActive] = useState(false); //Состояния модального окна для редактирования, добавления стримов
    const nameStreamRef = useRef(null);
    const linkStreamRef = useRef(null);
    function addStream(countryBuf, nameBuf, linkBuf){ //функция, добавляющая трансляцию в список
        let streamBuf = {
            name: nameBuf,
            viewers: 999,
            flagPath: countries.find(x => x.name === countryBuf).flagPath,
            link: linkBuf,
            country: countryBuf
        }
        setStreams([...streams, streamBuf]);
    }
    function removeStream(strname){
        setStreams(streams.filter(stream => !(stream.name.includes(strname))));
    };
    //_____________________________________________


    // ---------- Данные о матче -------------------
    const match = {
        MatchStatus: 1, //Статус матча: 0 - Не начался, 1 - LIVE, 2 - Закончился
        NameFirst: "AbuDabi",
        LogoFirst: "/img/teams_logo/AbuDabi.svg",
        SideFirst: "ct",
        ScoreFirst: 0,

        NameSecond: "ПУПА",
        LogoSecond: "/img/teams_logo/pupa.svg",
        SideSecond: "t",
        ScoreSecond: 2,
        MatchDate: new Date(2023, 4, 9, 8, 0, 0),
        maps: [
            {mapName: "Overpass", scoreFirst: 10, scoreSecond: 16, firstRound:[5, 10], secondRound: [5, 6]},
            {mapName: "Anubis", scoreFirst: 5, scoreSecond: 10, firstRound:[5, 10], secondRound: [null, null]},
            {mapName: "Nuke", scoreFirst: null, scoreSecond: null, firstRound:[null,null], secondRound: [null, null]}
        ],
        event: "Zasada Super Duper Ultra mega Cup",
        format: "Best of 3",
        type: "Lan",
        description: "* Тут какое то описание, уточнения или тп. "
    }
    // _____________________________________


    // Данные для редактирования команд в Хэдере матча 
    const teams = [
        {name: "ПУПА", logo: "img/teams_logo/pupa.svg"}, 
        {name: "Walhalla", logo: "img/teams_logo/Walhalla.png"}, 
        {name: "G2", logo: "img/teams_logo/NoLogo.svg"}, 
        {name: "AbuDabi", logo: "img/teams_logo/AbuDabi.svg"}, 
        {name: "Amfier", logo: "img/teams_logo/Amfier.png"}
    ];
    const [teamsActive, setTeamsActive] = useState([false, false, false, false, false]); // Состояния команд - выбрана ли команда(чтоб блокировать ее) в селекторе
    
    const indexOf = (value) =>{ // Функция нахождения индекса по названию команды
        for(let i = 0; i < teams.length; ++i){
          if(value === teams[i].name){
            return i;
          }
        }
    }
    const setSelectedTeam = () =>{ // Функция, определяющая какие команды заняты
        let temp = [...teamsActive];
        let id = indexOf(match.NameFirst);
        temp[id] = true;

        id = indexOf(match.NameSecond);
        temp[id] = true;

        setTeamsActive(temp);

        setIsStart(false);
    }
    const [isStart, setIsStart] = useState(true);
    //___________________________________________
    
    

    return(
        <div>
            {/* Хэдер матча со временем */}
            {isStart ? setSelectedTeam() : null}
            <MatchHeader {...match} isAdmin={isAdmin} teams={teams} teamsActive={teamsActive}/>

            <div className="match_info_upcoming">
                <div className="container">
                    {/* Описание матча */}
                    <Description {...match} isAdmin={isAdmin}></Description>
                    {/* Карты */}
                    <div className="container">
                        <MatchMap props={match} map={match.maps[0]}></MatchMap>
                        <MatchMap props={match} map={match.maps[1]}></MatchMap>
                        <MatchMap props={match} map={match.maps[2]}></MatchMap>
                    </div>
                </div>
                {/* В зависмости от того, какой тип матча, выводятся стримы */}
                <div className="container">
                <div className="row_center_5px">
                        <p>{match.MatchStatus == 2 ? "Повтор" : "Просмотр"}</p>
                        {isAdmin &&match.MatchStatus != 2 ?<Editor size="14px" depth={1} onClick={() => setStreamsEditorActive(true)}/> : <></>}
                    </div>
                    <div className="match_info_upcoming_stream">
                        {match.MatchStatus == 0 ? <p>Трансляции отсутствуют</p> : null}
                        {match.MatchStatus == 1 ? <p>Zasada TV</p> : null}
                        {match.MatchStatus == 2 ? <p>Повторы отсутствуют</p> : null}
                    </div>
                    {/* Видимость плашки с IP адресом для подключения */}
                    { (isCap && match.MatchStatus != 2) && 
                    <div className="ip_match">
                        {!ipMatch ? 
                        <p className="ip_hidden">IP скрыт</p> : 
                        <p className="ip_open" style={{color: "white", fontFamily: "var(--text-medium-lcg)"}}>{ipValue}</p> 
                        }
                        <div className="ip_block_images">
                            <img src="../img/Eye.svg" style={{cursor: "pointer"}} onClick={() => ipMatch ? setActiveIpMatch(!ipMatch) : setActiveIpMatch(true)}></img>
                            <img src="../img/Copy.svg" style={{cursor: "pointer"}} onClick={() =>[navigator.clipboard.writeText("321313131")]}></img>
                            <a href="">
                                <img src="../img/twitch_link.svg"></img>
                            </a>
                            
                        </div>
                    </div>
                    }
                    {/* Видимость стримов */}
                    {match.MatchStatus == 1 && 
                        streams.map((stream) =>
                        <Streams flagPath={stream.flagPath} name={stream.name} country={stream.country} viewers={stream.viewers} link={stream.link}/>)
                    }
                    
                </div>
            </div>

            {/* В зависимости от статуса матча выводятся scoreboard, scrollLog, statistic */}
            {match.MatchStatus == 1 && 
                <div className="scoreboard_block">
                    <p>Таблица</p>
                    <Scoreboard props={match} map={match.maps[0]}></Scoreboard>
                </div>
            }

            {match.MatchStatus == 1 && 
                <div className="scroll_logs_block">
                    <p>Игровые события</p>
                    <ScrollLog props={match} map={match.maps[0]}></ScrollLog>
                </div>
            }
                
            {match.MatchStatus == 2 && 
                <div className="match_statistic_block">
                    <p>Статистика матча</p>
                    <Statistic props={match} map={match.maps[0]}></Statistic>
                </div>
            }

            {/* Окно добавления, редактирования стримов */}
            <Login active={streamsEditorActive} setActive={setStreamsEditorActive}>
                <div className="header_splash_window">
                    <div className="logo_splash_window"></div>
                </div>
                <div className="info_text">
                    <p>Редактирование трансляций</p>
                </div>
                <div className="col_right_gap20">
                    <div className="inside scroll" style={{paddingLeft: "8px", alignItems: "flex-start", height: selectorCountryActive ? "400px": null, overflow: !selectorCountryActive ? "hidden" : null}}>
                        <div className="text-field">
                            <input className="text-field_input" type="text" name="ip" id="ip" placeholder="Введите IP сервера" value={ipValue} onChange={(ev) => setIpValue(ev.target.value)}/>
                        </div>
                        {streams.map((stream) =>
                                <div className="row_center_gap3">
                                    <div className="row_center_7">
                                        <div className="text-field_third">
                                            <div className="text-field_third_selector">
                                                
                                                <div className="text_field_third_select" >
                                                    <p className={ "choosed"}>{stream.country}</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="text-field_third">
                                            <input className="text-field_input" type="text" name="ip_name" id="ip_name" placeholder="Название" value={stream.name}/>
                                        </div>
                                        <div className="text-field_third">
                                            <input className="text-field_input" type="text" name="ip_link" id="ip_link" placeholder="Ссылка" value={stream.link}/>
                                        </div>
                                    </div>
                                    <div className="minus" onClick={() => removeStream(stream.name)}></div>
                                </div>
                        )}
                        <div className="row_center_gap3">
                            
                            <div className="row_center_7">
                                <div className="text-field_third">
                                    <div className="text-field_third_selector">
                                        <div className="text_field_third_select" onClick={() => toggleClass()}>
                                            <p className={valueCountry === "Выберите страну" ? "onStart" : "choosed"}>{valueCountry}</p>
                                            <img src="../img/arrow.svg" id="arrowIcon" className={selectorCountryActive ? 'rotate' : null} alt="arrow"/>
                                        </div>
                                        <ul className={ selectorCountryActive ? 'select_list_third' : 'select_list_third hide'}>
                                            {countries.map((country) =>
                                                <li className='text_field_third_options' onClick={setValueCountry.bind(this, country.name)}>
                                                    <img src={"../" + country.flagPath} alt={country.name}/>
                                                    <p>{country.name}</p>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="text-field_third">
                                    <input className="text-field_input" type="text" name="ip_name" id="ip_name" placeholder="Название" ref={nameStreamRef}/>
                                </div>
                                <div className="text-field_third">
                                    <input className="text-field_input" type="text" name="ip_link" id="ip_link" placeholder="Ссылка" ref={linkStreamRef}/>
                                </div>
                            </div>
                            {/* <div className="minus"></div> */}
                        </div>
                    </div>
                    <div className="add_stream">
                        <p>Добавить трансляцию</p>
                        <img src="../img/Add.svg" alt="Плюс" onClick={ () => {setStreamsEditorActive(!streamsEditorActive); addStream(valueCountry, nameStreamRef.current.value, linkStreamRef.current.value)}}/>
                    </div>
                </div>
            </Login>
        </div>   
    )
}
export default Match;