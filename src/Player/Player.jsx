import React from "react";
import { useRef, useState } from 'react';
import FlagName from "../components/FlagName/FlagName";
import Trophies from "../components/Trophies/Trophies";
import PlayerTabs from "../components/Tabs/PlayerTabs/PlayerTabs";
import Editor from "../components/Editor/Editor";
import Login from "../Login/Login";
import "./Player.css"
import "../../src/Team/Team.css"
import '../components/Editor/Editor.css';

function Player(){
    //Короче, про отображение лого, фотки, ника и, соответственно, alt в фотках - 
    //всё это как-то из БД должно тянуться, может через пропсы
    
    const social = {
        items : [
            {id: 1, src: "img/social/VK.svg", alt: "VK", active: true, color: "white", link: "https://vk.com/tarnada", displayed: "Кирилл Симовин"}, 
            {id: 2, src: "img/social/Steam.svg", alt: "Steam", active: true, color: "white", link: "https://steamcommunity.com/id/tamada4a", displayed: "STEAM_0:1:102762735"},
            {id: 3, src: "img/social/Discord.svg", alt: "Discord", active: false, color: "colored", link:"", displayed: ""},
            {id: 4, src: "img/social/Faceit.svg", alt: "Faceit", active: true, color: "colored", link: "https://www.faceit.com/ru/players/VolceChat", displayed: "VolceChat2003"}
        ]
    }

    const trophies = {
        trophies : [
            {id: 1, src: "img/trophies/cup1.svg", alt: "cup1"},
            {id: 2, src: "img/trophies/cup2.svg", alt: "cup2"},
            {id: 3, src: "img/trophies/cup3.svg", alt: "cup3"},
            {id: 4, src: "img/trophies/cup1.svg", alt: "cup1"},
            {id: 5, src: "img/trophies/cup2.svg", alt: "cup2"},
            {id: 6, src: "img/trophies/cup3.svg", alt: "cup3"},
            {id: 7, src: "img/trophies/cup1.svg", alt: "cup1"},
            {id: 8, src: "img/trophies/cup2.svg", alt: "cup2"},
            {id: 9, src: "img/trophies/cup3.svg", alt: "cup3"},
            {id: 10, src: "img/trophies/cup1.svg", alt: "cup1"},
            {id: 11, src: "img/trophies/cup2.svg", alt: "cup2"},
            {id: 12, src: "img/trophies/cup3.svg", alt: "cup3"},
            {id: 13, src: "img/trophies/cup1.svg", alt: "cup1"},
            {id: 14, src: "img/trophies/cup2.svg", alt: "cup2"},
            {id: 15, src: "img/trophies/cup3.svg", alt: "cup3"},
            {id: 16, src: "img/trophies/cup1.svg", alt: "cup1"},
            {id: 17, src: "img/trophies/cup2.svg", alt: "cup2"},
            {id: 18, src: "img/trophies/cup3.svg", alt: "cup3"},
            {id: 19, src: "img/trophies/cup1.svg", alt: "cup1"},
            {id: 20, src: "img/trophies/cup2.svg", alt: "cup2"},
            {id: 21, src: "img/trophies/cup3.svg", alt: "cup3"},
            {id: 22, src: "img/trophies/cup1.svg", alt: "cup1"},
            {id: 23, src: "img/trophies/cup2.svg", alt: "cup2"},
            {id: 24, src: "img/trophies/cup3.svg", alt: "cup3"}
        ]
    }

    const rosters = [
            {period: "Сентябрь 2020 - Настоящее время", team: "Amfier", teamLogo: "img/teams_logo/Amfier.png", id: 1, trophies:[
                {id: 313131, src: "img/trophies/cup2.svg", alt: "cup2"},
                {id: 313131, src: "img/trophies/cup2.svg", alt: "cup2"},
                {id: 313131, src: "img/trophies/cup2.svg", alt: "cup2"},
                {id: 313131, src: "img/trophies/cup2.svg", alt: "cup2"},
                {id: 313131, src: "img/trophies/cup2.svg", alt: "cup2"},
                {id: 313131, src: "img/trophies/cup2.svg", alt: "cup2"},
                {id: 313131, src: "img/trophies/cup2.svg", alt: "cup2"},
                {id: 414, src: "img/trophies/cup3.svg", alt: "cup3"}
            ]},
            {period: "Август 2020 - Сентябрь 2020", team: "Walhalla", teamLogo: "img/teams_logo/Walhalla.png", id: 2, trophies:[]},
            {period: "Февраль 2019 - Июнь 2019", team: "Amfier", teamLogo: "img/teams_logo/Amfier.png", id: 3, trophies:[
                {id: 313131, src: "img/trophies/cup2.svg", alt: "cup2"},
                {id: 313131, src: "img/trophies/cup2.svg", alt: "cup2"}]}
        ]

    const stats = {
        kills : 99999,
        deaths : 3131,
        kd : 31.93,
        kdd : 96868,
        hsp : 49.3,
        dpr : 60.2,
        maps : 6250,
        kpm : 16
    }

    const matches_upcoming = [
        {event: "Zasada Gamer League 2023", type: "upcoming", place: "", matches: [
            {date: "14.01.2023", leftTeam: "Amfier", rightTeam: "Walhalla", leftScore: "-", rightScore: "-"},
            {date: "14.01.2023", leftTeam: "Amfier", rightTeam: "Walhalla", leftScore: "-", rightScore: "-"},
        ]},
        {event: "Zasada League", type: "upcoming", place: "", matches: [
            {date: "15.02.2023", leftTeam: "Amfier", rightTeam: "Walhalla", leftScore: "-", rightScore: "-"},
            {date: "16.03.2023", leftTeam: "Amfier", rightTeam: "Walhalla", leftScore: "-", rightScore: "-"},
        ]},
    ]
  
    const matches_ended = [
        {event: "Zasada Gamer League 2023", type: "upcoming", place: "", matches: [
            {date: "13.01.2023", leftTeam: "Amfier", rightTeam: "Walhalla", leftScore: 16, rightScore: 7},
            {date: "13.01.2023", leftTeam: "Amfier", rightTeam: "Walhalla", leftScore: 14, rightScore: 16},
        ]},
        {event: "Zasada League", type: "upcoming", place: "", matches: [
            {date: "05.02.2023", leftTeam: "Amfier", rightTeam: "Walhalla", leftScore: 19, rightScore: 17},
            {date: "06.03.2023", leftTeam: "Amfier", rightTeam: "Walhalla", leftScore: 22, rightScore: 20},
        ]},
    ]

    const ongoing_events = [
        {name: "Zasada Gamer League Major Cup", date: "07.04.2023 - 07.04.2024", logo: "img/event_logo/BLAST.svg", link: "/event", participants:[
          {src: "img/teams_logo/AbuDabi.svg", name: "AbuDabi"},
          {src: "img/teams_logo/Walhalla.png", name: "Walhalla"},
          {src: "img/teams_logo/NoLogo.svg", name: "G2"},
          {src: "img/players/Hitriy_Kazah.png", name: "Hitriy_Kazah"},
          {src: "img/players/rusttle.png", name: "rusttle"},
        ]},
        {name: "Zasada Gamer League Major Cup", date: "07.04.2023 - 07.04.2024", logo: "img/event_logo/BLAST.svg", link: "/event",  participants:[
          {src: "img/teams_logo/AbuDabi.svg", name: "AbuDabi"},
          {src: "img/teams_logo/Walhalla.png", name: "Walhalla"},
          {src: "img/teams_logo/NoLogo.svg", name: "G2"},
          {src: "img/players/Hitriy_Kazah.png", name: "Hitriy_Kazah"},
          {src: "img/players/_SD_.png", name: "_SD_"},
        ]}
    ]
  
    const ended_events = [
        {name: "Zasada Gamer League Major Cup", date: "07.04.2023 - 07.04.2024", logo: "img/event_logo/Zasada2.svg", link: "/event", place: "1-3е"},
        {name: "Zasada Gamer League Major Cup", date: "07.04.2023 - 07.04.2024", logo: "img/event_logo/BLAST.svg", link: "/event", place: "2ое"},
        {name: "Zasada Gamer League Major Cup", date: "07.04.2023 - 07.04.2024", logo: "img/event_logo/BLAST.svg", link: "/event", place: "3е"},
        {name: "Zasada Gamer League Major Cup", date: "07.04.2023 - 07.04.2024", logo: "img/event_logo/BLAST.svg", link: "/event", place: "3-4ое"},
        {name: "Zasada Gamer League Major Cup", date: "07.04.2023 - 07.04.2024", logo: "img/event_logo/Zasada2.svg", link: "/event", place: "2-4ое"},
    ]

    const lan_events = [
        {name: "Zasada Gamer League Major Cup", date: "07.04.2023 - 07.04.2024", logo: "img/event_logo/Zasada2.svg", link: "/event", place: "1-3е"},
        {name: "Zasada Gamer League Major Cup", date: "07.04.2023 - 07.04.2024", logo: "img/event_logo/BLAST.svg", link: "/event", place: "2ое"},
        {name: "Zasada Gamer League Major Cup", date: "07.04.2023 - 07.04.2024", logo: "img/event_logo/BLAST.svg", link: "/event", place: "3е"},
        {name: "Zasada Gamer League Major Cup", date: "07.04.2023 - 07.04.2024", logo: "img/event_logo/BLAST.svg", link: "/event", place: "3-4ое"},
        {name: "Zasada Gamer League Major Cup", date: "07.04.2023 - 07.04.2024", logo: "img/event_logo/Zasada2.svg", link: "/event", place: "2-4ое"}
    ]
  
    const online_events = [
        {name: "Zasada Gamer League Major Cup", date: "07.04.2023 - 07.04.2024", logo: "img/event_logo/Zasada2.svg", link: "/event", place: "1-3е"},
        {name: "Zasada Gamer League Major Cup", date: "07.04.2023 - 07.04.2024", logo: "img/event_logo/BLAST.svg", link: "/event", place: "2ое"},
        {name: "Zasada Gamer League Major Cup", date: "07.04.2023 - 07.04.2024", logo: "img/event_logo/BLAST.svg", link: "/event", place: "3е"},
        {name: "Zasada Gamer League Major Cup", date: "07.04.2023 - 07.04.2024", logo: "img/event_logo/BLAST.svg", link: "/event", place: "3-4ое"},
        {name: "Zasada Gamer League Major Cup", date: "07.04.2023 - 07.04.2024", logo: "img/event_logo/BLAST.svg", link: "/event", place: "3-4ое"},
        {name: "Zasada Gamer League Major Cup", date: "07.04.2023 - 07.04.2024", logo: "img/event_logo/Zasada2.svg", link: "/event", place: "2-4ое"}
    ]

    const isAdmin = false;
    const isCap = true;
    const nick = isAdmin ? "Tamada (Админ)" : "Tamada";

    const [nickEditorActive, setNickEditorActive] = useState(false); //состояния модального окна для редактирования ника игрока
    const [socialEditorActive, setSocialEditorActive] = useState(false); //состояния модального окна для редактирования соц сетей
    const [socialUnbindActive, setSocialUnbindActive] = useState(false); //состояния модального окна для отвязки соц сети
    const [ageEditorActive, setAgeEditorActive] = useState(false); //состояния модального окна для редактирования возраста
    const [leaveTeamWindowActive, setLeaveTeamWindowActive] = useState(false); //состояния модального окна для выхода из команды
    const [leaveTeamActive, setLeaveTeamActive] = useState(false); //состояния модального окна для выхода из команды
    const [makeTeamActive, setMakeTeamActive] = useState(false); //состояния модального окна для создания команды

    const [mouseOutCard, setMouseOutCard] = useState(true); //Для ховера игрока
    const [mouseOnCard, setMouseOnCard] = useState(false); //Для ховера игрока

    const [socialToUnbind, setSocialToUnbind] = useState('');

    const [valueNick, setValueNick] = useState(nick); //Для селектора команды

    const nickRef = useRef(null);

    const handleClick = () => {
        let newNick = nickRef.current.value;
        if(newNick !== ""){
            setValueNick(isAdmin ? (newNick + " (Админ)") : newNick);
        }
        setNickEditorActive(!nickEditorActive);
    };
    
    const toggleOnMouseOver = () => {
        return(
            mouseOutCard ? 
                <div>
                    <div className="player_team_logo"><img src="../img/teams_logo/Amfier.png" alt="Amfier"/></div>
                    <div className="player">
                        <div className="crop_player"><img src="../img/players/Tamada.png" alt="Tamada"/></div>
                    </div>
                </div>
            : 
                <div className="img_hover_wrapper" onMouseOut={() => {setMouseOutCard(true); setMouseOnCard(false)}}>
                    <label for="file-input">
                        <img src="../img/PlayerHovered.svg" alt="Выбор фотографии игрока"/>
                    </label>
                    <input id="file-input" type="file"/>
                </div>
        );
    }

    const toggleClass = () => {
        
    }

    return(
    <div>
        <div className="user_back">
            <div className="player_card_wrapper" onMouseOut={() => {setMouseOutCard(true); setMouseOnCard(false)}} onMouseOver={() => {setMouseOutCard(false); setMouseOnCard(true)}}>
                {isAdmin ? toggleOnMouseOver() : 
                    <div>
                        <div className="player_team_logo"><img src="../img/teams_logo/Amfier.png" alt="Amfier"/></div>
                        <div className="player">
                            <div className="crop_player"><img src="../img/players/Tamada.png" alt="Tamada"/></div>
                        </div>
                    </div>
                }
            </div>
            <div className="player_info">
                <div className="player_nick">
                    <p>{valueNick}</p>
                    {isAdmin ? <Editor size="18px" depth={1} onClick={() => setNickEditorActive(true)}/>
                    : <></>}
                </div>
                <FlagName flagPath="img/flags/mini/Russia.svg" country="Россия" name="Кирилл Симовин" height='11px'/>
                <div className="devider_info">
                    <div className="devider_info_line">
                        <div class="row_center_5px">
                            <span>Возраст</span>
                            {isCap ? <Editor size="12px" depth={1} onClick={() => setAgeEditorActive(true)}/>
                            : <></>}
                        </div>
                        <p>Не указано</p>
                    </div>
                    <div className="devider_subline"></div>
                </div>
                <div className="devider_info">
                    <div className="devider_info_line">
                        <div class="row_center_5px">
                            <span>Текущая команда</span>
                            {isCap && !leaveTeamActive ?  
                            <div className="editor" style={{width: "16px", height: "16px"}} onClick={() => setLeaveTeamWindowActive(true)}>
                                <img src="../img/Cross.svg" alt="Editor"/>
                            </div>
                            :
                            <div className="editor" style={{width: "17px", height: "17px"}} onClick={() => setMakeTeamActive(true)}>
                                <img src="../img/MakeTeam.svg" alt="Editor"/>
                            </div> 
                            }

                        </div>
                        
                        {leaveTeamActive ? <p>Отсутствует</p> :
                        <div className="devider_team">
                            <div className="devider_team_logo"><img src="../img/teams_logo/Amfier.png" alt="Amfier"/></div>
                            <p>ПУПА</p>
                        </div>
                        }
                    </div>
                    <div className="devider_subline"></div>
                </div>
                <div className="devider_info">
                    <div className="devider_info_line">
                        <div className="row_center_5px">
                            <span>Социальные сети</span>
                            {/* ТУТ НАДО БУДЕТ ПОМЕНЯТЬ УСЛОВИЕ НА OnClick. Если игрок - на карандаш срабатывает его окно, если админ - его
                            Также условие на то, игрок или админ смотрит страницу!!!!!!*/}
                            {isAdmin || isCap ? <Editor size="12px" depth={1} onClick={() => setSocialEditorActive(true)}/>
                            : <></>}
                            
                        </div>
                        <div className="social_media">
                            {social.items.map((item) => 
                            item.active === true ? <a href={item.link} target="_blank" rel="noopener noreferrer"><img className={item.color === "white" ? 'active_elem' : 'active_colored'} src={"../" + item.src} alt={item.alt}/></a> : 
                            <img className={item.color === "white" ? 'inactive_elem' : 'inactive_colored'} src={"../" + item.src} alt={item.alt}/>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="devider_line"></div>
        <Trophies items={trophies}/>
        <PlayerTabs 
        stat={stats} 
        rosters={rosters}
        matches_upcoming={matches_upcoming}
        matches_ended={matches_ended}
        ongoing_events={ongoing_events}
        ended_events={ended_events}
        lan_events={lan_events}
        online_events={online_events}
        />

        <Login active={nickEditorActive} setActive={setNickEditorActive}>
            <div className="header_splash_window">
                 <div className="logo_splash_window"></div>
            </div>
            <div className="info_text">
                <p>Укажите ник игрока</p>
            </div>
            <div className="col_center_gap30">
                <div className="text-field">
                    <input className="text-field_input" type="text" name="nick" placeholder="Введите ник игрока" ref={nickRef}/>
                </div>
                <div className="full_grey_button">
                    <input type="submit" value="Сохранить" onClick={handleClick}/>
                </div>
            </div>
        </Login>

        <Login active={socialEditorActive} setActive={setSocialEditorActive}>
            <div className="header_splash_window">
                 <div className="logo_splash_window"></div>
            </div>
            <div className="info_text">
                <p>Управление социальными сетями</p>
            </div>
            {social.items.map((item) => 
                <div>
                    <div className="social_row">
                        <div className="logo_social_wrap">
                            <div className={item.color === "white" ? "social_logo" : "social_logo colored_to_white"}><img src={"../" + item.src} alt={item.alt} /></div>
                            <div className="social_wrapper">
                                <span>{item.alt}</span>
                                {item.displayed === "" ? <p>Не указано</p> :
                                    <p>{item.displayed}</p>
                                }
                            </div>
                        </div>
                        {isAdmin && item.displayed !== "" ? 
                        <span className="unbind" onClick={() => {setSocialUnbindActive(true); setSocialEditorActive(false); setSocialToUnbind(item.alt)}}>Отвязать</span> 
                        : null    
                        }
                        {isCap && item.displayed === "" ? <span className="unbind">Подключить</span> :
                            null
                        }
                        {isCap && item.displayed !== "" && (item.alt == "VK" || item.alt == "Discord") ? <span className="unbind">Редактировать</span> :
                            null
                        }
                    </div>
                    {/* {item.alt === "Faceit" ? <></> : <div className="social_devider"></div>} */}
                    <div className="social_devider"></div>
                </div>
            )}
            <div className="full_grey_button" >
                <input type="submit" value="Сохранить" onClick={() => socialEditorActive ? setSocialEditorActive(!socialEditorActive) : null} />
            </div>
        </Login>

        <Login active={socialUnbindActive} setActive={setSocialUnbindActive}>
            <div className="header_splash_window">
                 <div className="logo_splash_window"></div>
            </div>
            <div className="info_text">
                <p>Вы уверены, что хотите отвязать {socialToUnbind} игрока {valueNick}?</p>
            </div>
            <div className="small_buttons_wrapper">
                <div className="small_dark_button">
                    <input type="submit" value="Нет" onClick={() => socialUnbindActive ? setSocialUnbindActive(!socialUnbindActive) : null}/>
                </div>
                <div className="small_grey_button">
                    <input type="submit" value="Да" onClick={() => socialUnbindActive ? setSocialUnbindActive(!socialUnbindActive) : null}/>
                </div>
            </div>
        </Login>

        <Login active={ageEditorActive} setActive={setAgeEditorActive}>
            <div className="header_splash_window">
                 <div className="logo_splash_window"></div>
            </div>
            <div className="info_text">
                <p>Укажите дату рождения</p>
            </div>
            
        </Login>

        <Login active={leaveTeamWindowActive} setActive={setLeaveTeamWindowActive}>
            <div className="header_splash_window">
                 <div className="logo_splash_window"></div>
            </div>
            <div className="info_text">
                <p>Вы уверены, что хотите покинуть команду ПУПА?</p>
            </div>
            <div className="small_buttons_wrapper">
                <div className="small_dark_button">
                    <input type="submit" value="Нет" onClick={() => leaveTeamWindowActive ? setLeaveTeamWindowActive(!leaveTeamWindowActive) : null}/>
                </div>
                <div className="small_grey_button">
                    <input type="submit" value="Да" onClick={() => leaveTeamWindowActive ? (setLeaveTeamWindowActive(!leaveTeamWindowActive), setLeaveTeamActive(!leaveTeamActive)) : null}/>
                </div>
            </div>
        </Login>

        <Login active={makeTeamActive} setActive={setMakeTeamActive}>
            <div className="header_splash_window">
                <div className="logo_splash_window"></div>
            </div>
            <div className="info_text">
                <p>Укажите информацию о команде</p>
            </div> 
            <div class="col_center_gap30">
                 
                <div class="col_center_gap10">
                    <div className="text-field">
                        <input className="text-field_input" style={{width: "430px"}} type="text" name="login" id="login" placeholder="Название. Максимум 15 символов" />
                    </div>
                    <div className="text-field">
                        <input className="text-field_input" style={{width: "430px"}} type="text" name="login" id="login" placeholder="Тег. Максимум 8 символов" />
                    </div>
                    <div class="row_center_6">
                        <div className="text-field_half">
                            <input className="text-field_half input" type="text" name="login" id="login" placeholder="Укажите страну" />
                        </div>
                        <div className="text-field_half">
                            <input className="text-field_half input" type="text" name="login" id="login" placeholder="Укажите город" />
                        </div>
                    </div>
                </div>
                <div className="small_buttons_wrapper">
                    <div className="small_dark_button" style={{width: "122px", height: "48px"}} >
                        <input type="submit" value="Отмена" style={{width: "122px", height: "48px"}} onClick={() => makeTeamActive ? setMakeTeamActive(!makeTeamActive) : null}/>
                    </div>
                    <div className="small_grey_button"  style={{width: "122px", height: "48px"}}>
                        <input type="submit" value="Создать" style={{width: "122px", height: "48px"}} onClick={() => makeTeamActive ? setMakeTeamActive(!makeTeamActive) : null}/>
                    </div>
                </div>
            </div>
            
        </Login>
    </div>
    );
}

export default Player;