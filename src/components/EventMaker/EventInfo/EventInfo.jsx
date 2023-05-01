import React from "react";
import { useRef, useState } from 'react';
import Participant from '../../Participant/Participant';
import PrizePlace from '../../PrizePlace/PrizePlace';
import Map from '../../Map/Map';
import Editor from "../../Editor/Editor";
import Login from "../../../Login/Login";
import './EventInfo.css';

function EventInfo(props) {

    
    const [diskLinkEditorActive, setDiskLinkEditorActive] = useState(false); //состояния модального окна для редактирования

    const [prizePlaceEditorActive, setPrizePlaceEditorActive] = useState(false); //состояния модального окна для редактирования призовых мест
    const [selectorActive, setSelectorActive] = useState([false, false, false]); // состояния селектора


    const [valueTeam, setValueTeam] = useState(['Выберите команду', 'Выберите команду', 'Выберите команду']); //Для селектора команды
    const [teamsActive, setTeamsActive] = useState([false, false, false]); // состояния команд - выбрана ли команда(чтоб блокировать ее)

    const teams = [
        {name: "Tamada", src: "img/players/Tamada.png", team: "Amfier", teamsrc: "img/teams_logo/Amfier.png", status: "", type: "player"},
        {name: "rusttle", src: "img/players/rusttle.png", team: "", teamsrc: "", status: "", type: "player"},
        {name: "Walhalla", src: "img/teams_logo/Walhalla.png", status: "", type: "team"}
    ]

    const diskLinkRef = useRef(null);

    const prizePlace = props.prizePlace;

    const [valueDiskLink, setValueDiskLink] = useState(props.photoLink); //Для селектора команды

    const urlFix = (url) => {
        if(url.startsWith("https://")){
            return url.replace("https://", "");
        }
        else if(url.startsWith("http://")){
            return url.replace("http://", "");
        }
        return url;
    }

    const toggleClass = (id) => { // функция toggle для селектора
        let temp = [];
        for(let i = 0; i < selectorActive.length; ++i){
          temp.push(false);
        }
        if(id !== "all"){
          temp[id] = !selectorActive[id];
        }
        setSelectorActive(temp);
    };
    
    const setTeam = (id, value) =>{ // с её помощью делаем нужную команду заблокированной 
        let temp = [...teamsActive];
        let val = indexOf(value);
    
        temp[val] = !temp[val];
        temp[id] = !temp[id];
        setTeamsActive(temp);
    }
    
    const setTeamValue = (id, value) =>{ // ставим выбранную команду в выбранное поле
        let tempTeams = [...valueTeam];
        tempTeams[id] = value;
        setValueTeam(tempTeams);
    }
    
    const indexOf = (value) =>{
        for(let i = 0; i < teams.length; ++i){
          if(value === teams[i].name){
            return i;
          }
        }
    }
    
    const generateSelectors = () =>{
        const size = teams.length;
        let content = []
        for(let i = 0; i < size; ++i){
          content.push(
            <div className="row_center_6">
              <div className="text-field_half" style={{zIndex: size - i}}>
                <div className="text-field_half_selector">
                  <div className="text_field_half_select" onClick={() => toggleClass(i)}>
                    <p className={valueTeam[i] === "Выберите команду" ? "onStart" : "choosed"}>{valueTeam[i]}</p>
                    <img src="../img/arrow.svg" className={selectorActive[i] ? 'rotate' : null} alt="arrow"/>
                  </div>
                  <ul className={ selectorActive[i] ? 'select_list' : 'select_list hide'}>
                    {teams.map((team) =>
                      <li className={teamsActive[indexOf(team.name)] ? "text_field_half_options non_selectable" : "text_field_half_options"} onClick={()=>{setTeamValue(i, team.name); setTeam(indexOf(team.name), valueTeam[i]); toggleClass(i)}}>
                        <div className="list_logo">
                          <img src={"../" + team.src} alt={team.name}/>
                        </div>
                        <p>{team.name}</p>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
              <div className="text-field_half" style={{zIndex: size - i}}>
                <div className="text-field_half_selector">
                  <div className="text_field_half_select non_selectable_half_select">
                    <p className="choosed">{prizePlace[i]["place"]}</p>
                  </div>
                </div>
              </div>
          </div>
          );
        }
        return content;
    }

    const handleClick = () => {
        setValueDiskLink(diskLinkRef.current.value);
        setDiskLinkEditorActive(!diskLinkEditorActive);
    };

    return(
        <div>
            <div className="space_wrapper">
                <div className="container_name">
                    <div className="event_col"><p>{props.part_header}</p></div>
                    <div className="participants_wrapper">
                        <Participant part={props.part} total={props.total} status={props.status}/>
                    </div>
                </div>

                <div className="container_name">
                    <div className="row_center_5px">
                        <div className="event_col"><p>Призовые места</p></div>
                        <Editor size="12px" depth={1} onClick={() => setPrizePlaceEditorActive(true)}/> {/* Появляется после старта турика */}
                    </div>
                    <div className="participants_wrapper">
                        <PrizePlace prize={props.prizePlace}/>
                    </div>
                </div>

                <div className="event_info_bottom">
                    <div className="container_name">
                        <div className="event_col"><p>Пул карт</p></div>
                        <div className="maps">
                            {props.maps.map((map_name) => 
                                <Map map={map_name}/>
                            )}
                        </div>
                    </div>
                    
                    <div className="event_info_bottom_wrapper">
                        <div className="container_name">
                            <div className="event_col"><p>Формат игр</p></div>
                            <div className="event_info">
                                <p>Ну тут описание турнира, всё такое, карты всякие и тд, и тп.
                                Ну тут описание турнира, всё такое, карты всякие и тд, и тп. 
                                </p>
                            </div>
                        </div>
                        <div className="container_name">
                            <div className="row_center_5px">
                                <div className="event_col"><p>Архив с фотографиями</p></div>
                                <Editor size="12px" depth={1} onClick={() => setDiskLinkEditorActive(true)}/>
                            </div>
                            <div className="event_info">
                                <a href={valueDiskLink} target="_blank" rel="noopener noreferrer">{urlFix(valueDiskLink)}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Login active={prizePlaceEditorActive} setActive={setPrizePlaceEditorActive}>
                <div className="header_splash_window" onClick={() => toggleClass("all")}>
                    <div className="logo_splash_window"></div>
                </div>
                <div className="info_text" onClick={() => toggleClass("all")}>
                <p>Укажите информацию о призовых местах</p>
                </div>
                <div className="col_center_gap30">
                    <div className="inside">
                        {generateSelectors()}
                    </div>
                </div>
            </Login>

            <Login active={diskLinkEditorActive} setActive={setDiskLinkEditorActive}>
                <div className="header_splash_window">
                    <div className="logo_splash_window"></div>
                </div>
                <div className="info_text">
                    <p>Укажите ссылку на диск с фото</p>
                </div>
                <div className="col_center_gap30">
                    <div className="text-field">
                        <input className="text-field_input" type="text" name="diskLink" placeholder="Введите ссылку на диск с фото" ref={diskLinkRef}/>
                    </div>
                    <div className="full_grey_button">
                        <input type="submit" value="Сохранить" onClick={handleClick}/>
                    </div>
                </div>
            </Login>
        </div>
    );
}

export default EventInfo;