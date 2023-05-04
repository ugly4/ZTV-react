import React from "react";
import { useState } from "react";
import Editor from "../../components/Editor/Editor";
import Login from "../../Login/Login";
import "./Description.css"

function Description(props){
    const [infoEditorActive, setInfoEditorActive] = useState(false); //состояния модального окна для редактирования текущих матчей
    
    const [selectedFormat, setSelectedFormat] = useState("bo" + props.format[8]); // формат (bo1 и тп)
    const [formatSelectorActive, setFormatSelectorActive] = useState(false);

    const [selectedType, setSelectedType] = useState(props.type); // тип (Лан/Онлайн)
    const [typeSelectorActive, setTypeSelectorActive] = useState(false);

    const eventMapPool = [
        "Anubis", "Mirage", "Overpass", "Nuke", "Vertigo", "Ancient", "Inferno"
    ]

    const toggleFormat = () => {
        setFormatSelectorActive(!formatSelectorActive);
      }
  
    const toggleType = () => {
        setTypeSelectorActive(!typeSelectorActive);
    }

    return(
    <div>
        <div className="row_center_5px">
            <p>Карты</p>
            {props.isAdmin ?<Editor size="14px" depth={1} onClick={() => setInfoEditorActive(true)}/> : <></>}
        </div>
        <div class="match_info_upcoming_maps_desc">
            <p>{props.format} ({props.type})<br/><br/>{props.description}</p>
        </div>
        {props.MatchStatus == 0 ? null : 
            <div class="maps_news">
                <p>1. Команда ПУПА убирает Mirage</p>
                <p>2. Команда AbuDabi убирает Vertigo</p>
                <p>3. Команда AbuDabi выбирает Overpass</p>
                <p>4. Команда ПУПА выбирает Anubis</p>
                <p>5. Команда AbuDabi убирает Inferno</p>
                <p>6. Команда ПУПА убирает Ancient</p>
                <p>7. Остаётся Nuke</p>
            </div>
        }
        <Login active={infoEditorActive} setActive={setInfoEditorActive}>
            <div className="header_splash_window">
                <div className="logo_splash_window"></div>
            </div>
            <div className="info_text">
                <p>Укажите информацию о картах</p>
            </div>
            <div className="inside">
                <div className="row_center_6">
                    <div className="text-field_half">
                        <div className="text-field_half_selector">
                            <div className="text_field_half_select" onClick={() => toggleFormat()}>
                                <p className={selectedFormat === ("bo" + props.format[8]) ? "onStart" : "choosed"}>{selectedFormat}</p>
                                <img src="img/arrow.svg" className={formatSelectorActive ? 'rotate' : null} alt="arrow"/>
                            </div>
                            <ul className={ formatSelectorActive ? 'select_list' : 'select_list hide'}>
                                <li className="text_field_half_options" onClick={()=>{setSelectedFormat("bo1"); toggleFormat()}}>
                                <p>bo1</p>
                                </li>
                                <li className="text_field_half_options" onClick={()=>{setSelectedFormat("bo2"); toggleFormat()}}>
                                <p>bo2</p>
                                </li>
                                <li className="text_field_half_options" onClick={()=>{setSelectedFormat("bo3"); toggleFormat()}}>
                                <p>bo3</p>
                                </li>
                                <li className="text_field_half_options" onClick={()=>{setSelectedFormat("bo5"); toggleFormat()}}>
                                <p>bo5</p>
                                </li>
                                <li className="text_field_half_options" onClick={()=>{setSelectedFormat("bo7"); toggleFormat()}}>
                                <p>bo7</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-field_half">
                        <div className="text-field_half_selector">
                            <div className="text_field_half_select" onClick={() => toggleType()}>
                                <p className={selectedType === props.type ? "onStart" : "choosed"}>{selectedType}</p>
                                <img src="img/arrow.svg" className={typeSelectorActive ? 'rotate' : null} alt="arrow"/>
                            </div>
                            <ul className={ typeSelectorActive ? 'select_list' : 'select_list hide'}>
                                <li className="text_field_half_options" onClick={()=>{setSelectedType("Lan"); toggleType()}}>
                                <p>Lan</p>
                                </li>
                                <li className="text_field_half_options" onClick={()=>{setSelectedType("Online"); toggleType()}}>
                                <p>Online</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="description_field">
                    <textarea type="text" placeholder="Введите описание" style={{width: "434px", color: "white", fontSize: "16px", height: "65px"}}>{props.description}</textarea>
                </div>
            </div>
        </Login>
    </div>
    )
}

export default Description;