import React from "react";
import { useState } from 'react';
import CurrentMatchMaker from "../components/MatchMacker/CurrentMatchMaker";
import OngoingMatchMaker from "../components/MatchMacker/OngoingMatchMaker";
import Editor from "../components/Editor/Editor";
import Login from "../Login/Login";
import "./Matches.css";

function Matches() {

    const [ongoingEditorActive, setOngoingEditorActive] = useState(false); //состояния модального окна для редактирования текущих матчей
    const [matchSelectorActive, setMatchSelectorActive] = useState(false);
    const [isMatchSelectedActive, setIsMatchSelectedActive] = useState(false);

    const [valueTeam, setValueTeam] = useState('Выберите матч'); //Для селектора команды

    const current_matches = [
        {series: "Zasada2", event: "Zasada Summer Cup", eventSrc: "img/event_logo/Zasada2.svg", leftTeam: "Amfier", leftTeamSrc: "img/teams_logo/Amfier.png", rightTeam: "Walhalla", rightTeamSrc: "img/teams_logo/Walhalla.png", leftUpperScore: 9, rightUpperScore: 16, leftSubScore: 0, rightSubScore: 0, tier: 3, tierSrc: "img/Top_star.svg", map: "anb"},
        {series: "BLAST", event: "BLAST Summer Cup", eventSrc: "img/event_logo/BLAST.svg", leftTeam: "Amfier", leftTeamSrc: "img/teams_logo/Amfier.png", rightTeam: "Walhalla", rightTeamSrc: "img/teams_logo/Walhalla.png", leftUpperScore: 16, rightUpperScore: 1, leftSubScore: 0, rightSubScore: 0, tier: 4, tierSrc: "img/Top_star.svg", map: "anb"},
        {series: "Zasada2", event: "Zasada Summer Cup", eventSrc: "img/event_logo/Zasada2.svg", leftTeam: "Amfier", leftTeamSrc: "img/teams_logo/Amfier.png", rightTeam: "G2", rightTeamSrc: "img/teams_logo/NoLogo.svg", leftUpperScore: 15, rightUpperScore: 15, leftSubScore: 1, rightSubScore: 0, tier: 0, tierSrc: "img/Top_star.svg", map: "bo3"},
        {series: "Zasada2", event: "Zasada Summer Cup", eventSrc: "img/event_logo/Zasada2.svg", leftTeam: "Amfier", leftTeamSrc: "img/teams_logo/Amfier.png", rightTeam: "Walhalla", rightTeamSrc: "img/teams_logo/Walhalla.png", leftUpperScore: 0, rightUpperScore: 0, leftSubScore: 2, rightSubScore: 2, tier: 5, tierSrc: "img/Top_star.svg", map: "bo5"},
    ]

    const ongoing_matches = [
        {date: "15.03.2023", matches: [
            {time: "12:00", series: "Zasada2", event: "Zasada Summer Cup", eventSrc: "img/event_logo/Zasada2.svg", leftTeam: "Amfier", leftTeamSrc: "img/teams_logo/Amfier.png", rightTeam: "Walhalla", rightTeamSrc: "img/teams_logo/Walhalla.png", tier: 3, tierSrc: "img/Top_star.svg", map: "anb"},
            {time: "12:45", series: "BLAST", event: "BLAST Summer Cup by Tamada", eventSrc: "img/event_logo/BLAST.svg", leftTeam: "Amfier", leftTeamSrc: "img/teams_logo/Amfier.png", rightTeam: "Walhalla", rightTeamSrc: "img/teams_logo/Walhalla.png", tier: 5, tierSrc: "img/Top_star.svg", map: "bo2"},
            {time: "13:45", series: "Zasada2", event: "Zasada Summer Cup", eventSrc: "img/event_logo/Zasada2.svg", leftTeam: "Amfier", leftTeamSrc: "img/teams_logo/Amfier.png", rightTeam: "Walhalla", rightTeamSrc: "img/teams_logo/Walhalla.png", tier: 3, tierSrc: "img/Top_star.svg", map: "nuke"},
        ]},
        {date: "16.03.2023", matches: [
            {time: "09:45", series: "Zasada2", event: "Zasada Summer Cup", eventSrc: "img/event_logo/Zasada2.svg", leftTeam: "Amfier", leftTeamSrc: "img/teams_logo/Amfier.png", rightTeam: "Walhalla", rightTeamSrc: "img/teams_logo/Walhalla.png", tier: 3, tierSrc: "img/Top_star.svg", map: "anb"},
            {time: "22:45", series: "BLAST", event: "BLAST Summer Cup by Tamada", eventSrc: "img/event_logo/BLAST.svg", leftTeam: "Amfier", leftTeamSrc: "img/teams_logo/Amfier.png", rightTeam: "Walhalla", rightTeamSrc: "img/teams_logo/Walhalla.png", tier: 5, tierSrc: "img/Top_star.svg", map: "bo2"},
            {time: "23:00", series: "Zasada2", event: "Zasada Summer Cup", eventSrc: "img/event_logo/Zasada2.svg", leftTeam: "Amfier", leftTeamSrc: "img/teams_logo/Amfier.png", rightTeam: "Walhalla", rightTeamSrc: "img/teams_logo/Walhalla.png", tier: 3, tierSrc: "img/Top_star.svg", map: "nuke"},
        ]},
    ]

    const toggleClass = () => { // функция toggle для селектора
        setMatchSelectorActive(!matchSelectorActive);
    };
    
    const indexOf = (leftName, rightName) =>{
        for(let i = 0; i < current_matches.length; ++i){
          if(leftName === current_matches[i].leftTeam && rightName === current_matches[i].rightTeam){
            return i;
          }
        }
    }

    return(
        <div>
            <div className="matches_header">
                <div className="row_center_5px">
                    <p>Текущие матчи</p>
                    <Editor size="12px" depth={1} onClick={() => setOngoingEditorActive(true)}/>
                </div>
            </div>
            <div className="matches">
                <div className="col_center_gap10">
                    {current_matches.map((match) =>
                        <CurrentMatchMaker {...match}/>
                    )}
                </div>
            </div>

            <div className="matches_header"><p>Ближайшие матчи</p></div>
            <div className="matches">
                {ongoing_matches.map((day) =>
                    <OngoingMatchMaker {...day}/>
                )}
            </div>
            <Login active={ongoingEditorActive} setActive={setOngoingEditorActive}>
                <div className="header_splash_window">
                    <div className="logo_splash_window"></div>
                </div>
                <div className="info_text">
                    <p>Укажите информацию о матче</p>
                </div>
                <div className="text-field_half">
                <div className="text-field_half_selector">
                  <div className="text_field_half_select" onClick={() => toggleClass()}>
                    <p className={valueTeam === "Выберите матч" ? "onStart" : "choosed"}>{valueTeam}</p>
                    <img src="../img/arrow.svg" className={matchSelectorActive ? 'rotate' : null} alt="arrow"/>
                  </div>
                  <ul className={ matchSelectorActive ? 'select_list' : 'select_list hide'}>
                    {current_matches.map((match) =>
                      <li className="text_field_half_options" onClick={()=>{setValueTeam(match.leftTeam + " vs. " + match.rightTeam); toggleClass()}}>
                        <div className="list_logo">
                          <img src={match.leftTeamSrc} alt={match.leftTeam}/>
                        </div>
                        <p>{match.leftTeam}</p>
                        <p> vs. </p>
                        <p>{match.rightTeam}</p>
                        <div className="list_logo">
                          <img src={match.rightTeamSrc} alt={match.rightTeam}/>
                        </div>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </Login>
        </div>
    );
}

export default Matches;