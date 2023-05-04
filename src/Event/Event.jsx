import React from "react";
import {Routes, Route, NavLink, Navigate} from 'react-router-dom'
import FlagName from "../components/FlagName/FlagName";
import EventInfo from "../components/EventMaker/EventInfo/EventInfo";
import EventMatches from "../components/EventMaker/EventMatches";
import EventResults from "../components/EventMaker/EventResults/EventResults";
import "./Event.css";
import '../components/Tabs/PlayerTabs/PlayerTabs.css';
import { useState } from "react";
import Login from "../Login/Login";
import Notification from "../components/Notification/Notification";

function Event(){
    const tournament ={
        date: "03.12 - 05.12.2023",
        prize: "10.000.000",
        fee: "1.000",
        teams: "16",
        regTeams: "0",
        type: "Online",
        format: "2x2"

    }
    const drawOngoing = () =>{
        return(
            <div>
                <ul className="event_tabs">
                    <li className="tab_link">
                        <NavLink to="info" style={({ isActive }) => ({  // если активна, то текст белый
                            color: isActive ? 'var(--text-01)' : 'var(--text-02)'})}>
                            Информация
                        </NavLink>
                    </li>
                    <li className="tab_link">
                        <NavLink to="matches" style={({ isActive }) => ({  // если активна, то текст белый
                            color: isActive ? 'var(--text-01)' : 'var(--text-02)'})}>
                            Матчи
                        </NavLink>
                    </li>
                    <li className="tab_link">
                        <NavLink to="results" style={({ isActive }) => ({  // если активна, то текст белый
                            color: isActive ? 'var(--text-01)' : 'var(--text-02)'})}>
                            Результаты
                        </NavLink>
                    </li>
                </ul>
                <Routes>
                    <Route index element={<Navigate replace to="/event/info" />}/>
                    <Route path="info" element={<EventInfo maps={maps} part={participants} total={total} prizePlace={prizePlace} part_header={part_header} photoLink={photoLink} status="ended"/>}/>
                    <Route path="matches" element={<EventMatches current_matches={current_matches} ongoing_matches={ongoing_matches}/>}/>
                    <Route path="results" element={<EventResults results={results}/>}/>
                </Routes>
            </div>
        );
    }

    const drawEnded = () =>{
        return(
            <div>
                <ul className="event_tabs">
                    <li className="tab_link">
                        <NavLink to="info" style={({ isActive }) => ({  // если активна, то текст белый
                            color: isActive ? 'var(--text-01)' : 'var(--text-02)'})}>
                            Информация
                        </NavLink>
                    </li>
                    <li className="tab_link">
                        <NavLink to="results" style={({ isActive }) => ({  // если активна, то текст белый
                            color: isActive ? 'var(--text-01)' : 'var(--text-02)'})}>
                            Результаты
                        </NavLink>
                    </li>
                </ul>
                <Routes>
                    <Route index element={<Navigate replace to="/event/info" />}/>
                    <Route path="info" element={<EventInfo maps={maps} part={participants} total={total} prizePlace={prizePlace} part_header={part_header} photoLink={photoLink} status="ended"/>}/>
                    <Route path="results" element={<EventResults results={results}/>}/>
                </Routes>
            </div>
        );
    }
    
    const maps = ["Ancient", "Anubis", "Inferno", "Mirage", "Nuke", "Overpass", "Vertigo"]
    const registred = [
        {name: "Tamada", src: "img/players/Tamada.png", team: "Amfier", teamsrc: "img/teams_logo/Amfier.png", status: "await", type: "player"},
        {name: "rusttle", src: "img/players/rusttle.png", team: "", teamsrc: "", status: "accepted", type: "player"},
        {name: "Amfier", src: "img/teams_logo/Amfier.png", status: "accepted", type: "team"},
        {name: "Walhalla", src: "img/teams_logo/Walhalla.png", status: "await", type: "team"}
    ];

    const participants =[
        {name: "Tamada", src: "img/players/Tamada.png", team: "Amfier", teamsrc: "img/teams_logo/Amfier.png", status: "", type: "player"},
        {name: "rusttle", src: "img/players/rusttle.png", team: "", teamsrc: "", status: "", type: "player"},
        {name: "Walhalla", src: "img/teams_logo/Walhalla.png", status: "kicked", type: "team"},
        {name: "Walhalla", src: "img/teams_logo/Walhalla.png", status: "", type: "team"}
    ]
    const total = 16;

    const prizePlace = [
        {place: "1-2ое", prize: "10.000р", winner: "", src: ""},
        {place: "1-2ое", prize: "10.000р", winner: "", src: ""},
        {place: "3-4е", prize: "5.000р", winner: "", src: ""},
        {place: "3-4е", prize: "5.000р", winner: "", src: ""},
        {place: "5-6ое", prize: "2.500р", winner: "", src: ""},
        {place: "5-6ое", prize: "2.500р", winner: "", src: ""},
        {place: "7-10ое", prize: "Сертификаты клуба", winner: "", src: ""},
        {place: "7-10ое", prize: "Сертификаты клуба", winner: "ПУПА", src: "img/teams_logo/pupa.svg"},
        {place: "7-10ое", prize: "Сертификаты клуба", winner: "Amfier", src: "img/teams_logo/Walhalla.png"},
        {place: "7-10ое", prize: "Сертификаты клуба", winner: "Walhalla", src: "img/teams_logo/Walhalla.png"}
    ]

    const type = "team";
    const part_header = type === "team" ? "Команды" : "Участники";

    const photoLink = "https://disk.yandex.ru/d/5DJs4LKcEYfYxA";

    const current_matches = [
        {series: "Zasada2", event: "Zasada Summer Cup", eventSrc: "../img/event_logo/Zasada2.svg", leftTeam: "Amfier", leftTeamSrc: "../img/teams_logo/Amfier.png", rightTeam: "Walhalla", rightTeamSrc: "../img/teams_logo/Walhalla.png", leftUpperScore: 9, rightUpperScore: 16, leftSubScore: 0, rightSubScore: 0, tier: 3, tierSrc: "../img/Top_star.svg", map: "anb"},
        {series: "Zasada2", event: "Zasada Summer Cup", eventSrc: "../img/event_logo/Zasada2.svg", leftTeam: "Amfier", leftTeamSrc: "../img/teams_logo/Amfier.png", rightTeam: "Walhalla", rightTeamSrc: "../img/teams_logo/Walhalla.png", leftUpperScore: 16, rightUpperScore: 1, leftSubScore: 0, rightSubScore: 0, tier: 4, tierSrc: "../img/Top_star.svg", map: "anb"},
        {series: "Zasada2", event: "Zasada Summer Cup", eventSrc: "../img/event_logo/Zasada2.svg", leftTeam: "Amfier", leftTeamSrc: "../img/teams_logo/Amfier.png", rightTeam: "Walhalla", rightTeamSrc: "../img/teams_logo/Walhalla.png", leftUpperScore: 15, rightUpperScore: 15, leftSubScore: 1, rightSubScore: 0, tier: 0, tierSrc: "../img/Top_star.svg", map: "bo3"},
        {series: "Zasada2", event: "Zasada Summer Cup", eventSrc: "../img/event_logo/Zasada2.svg", leftTeam: "Amfier", leftTeamSrc: "../img/teams_logo/Amfier.png", rightTeam: "Walhalla", rightTeamSrc: "../img/teams_logo/Walhalla.png", leftUpperScore: 0, rightUpperScore: 0, leftSubScore: 2, rightSubScore: 2, tier: 5, tierSrc: "../img/Top_star.svg", map: "bo5"},
    ]

    const ongoing_matches = [
        {date: "15.03.2023", matches: [
            {time: "12:00", series: "Zasada2", event: "Zasada Summer Cup", eventSrc: "../img/event_logo/Zasada2.svg", leftTeam: "Amfier", leftTeamSrc: "../img/teams_logo/Amfier.png", rightTeam: "Walhalla", rightTeamSrc: "../img/teams_logo/Walhalla.png", tier: 3, tierSrc: "../img/Top_star.svg", map: "anb"},
            {time: "12:45", series: "Zasada2", event: "Zasada Summer Cup", eventSrc: "../img/event_logo/Zasada2.svg", leftTeam: "Amfier", leftTeamSrc: "../img/teams_logo/Amfier.png", rightTeam: "Walhalla", rightTeamSrc: "../img/teams_logo/Walhalla.png", tier: 5, tierSrc: "../img/Top_star.svg", map: "bo2"},
            {time: "13:45", series: "Zasada2", event: "Zasada Summer Cup", eventSrc: "../img/event_logo/Zasada2.svg", leftTeam: "Amfier", leftTeamSrc: "../img/teams_logo/Amfier.png", rightTeam: "Walhalla", rightTeamSrc: "../img/teams_logo/Walhalla.png", tier: 3, tierSrc: "../img/Top_star.svg", map: "nuke"},
        ]},
        {date: "16.03.2023", matches: [
            {time: "09:45", series: "Zasada2", event: "Zasada Summer Cup", eventSrc: "../img/event_logo/Zasada2.svg", leftTeam: "Amfier", leftTeamSrc: "../img/teams_logo/Amfier.png", rightTeam: "Walhalla", rightTeamSrc: "../img/teams_logo/Walhalla.png", tier: 3, tierSrc: "../img/Top_star.svg", map: "anb"},
            {time: "22:45", series: "Zasada2", event: "Zasada Summer Cup", eventSrc: "../img/event_logo/Zasada2.svg", leftTeam: "Amfier", leftTeamSrc: "../img/teams_logo/Amfier.png", rightTeam: "Walhalla", rightTeamSrc: "../img/teams_logo/Walhalla.png", tier: 5, tierSrc: "../img/Top_star.svg", map: "bo2"},
            {time: "23:00", series: "Zasada2", event: "Zasada Summer Cup", eventSrc: "../img/event_logo/Zasada2.svg", leftTeam: "Amfier", leftTeamSrc: "../img/teams_logo/Amfier.png", rightTeam: "Walhalla", rightTeamSrc: "../img/teams_logo/Walhalla.png", tier: 3, tierSrc: "../img/Top_star.svg", map: "nuke"},
        ]},
    ]

    const results = [
        {date: "03.12.2023", matches: [
            {series: "Zasada2", event: "Zasada Summer Cup", eventSrc: "../img/event_logo/Zasada2.svg", leftTeam: "Walhalla", leftTeamSrc: "../img/teams_logo/Walhalla.png", rightTeam: "Amfier", rightTeamSrc: "../img/teams_logo/Amfier.png", leftScore: 16, rightScore: 8, tier: 5, tierSrc: "../img/Top_star.svg", map: "nuke"},
            {series: "Zasada2", event: "Zasada Summer Cup", eventSrc: "../img/event_logo/Zasada2.svg", leftTeam: "Amfier", leftTeamSrc: "../img/teams_logo/Amfier.png", rightTeam: "Walhalla", rightTeamSrc: "../img/teams_logo/Walhalla.png", leftScore: 9, rightScore: 16, tier: 0, tierSrc: "../img/Top_star.svg", map: "trn"},
            {series: "Zasada2", event: "Zasada Summer Cup", eventSrc: "../img/event_logo/Zasada2.svg", leftTeam: "Amfier", leftTeamSrc: "../img/teams_logo/Amfier.png", rightTeam: "Walhalla", rightTeamSrc: "../img/teams_logo/Walhalla.png", leftScore: 22, rightScore: 20, tier: 4, tierSrc: "../img/Top_star.svg", map: "cbble"}
        ]},
        {date: "04.12.2023", matches: [
            {series: "Zasada2", event: "Zasada Summer Cup", eventSrc: "../img/event_logo/Zasada2.svg", leftTeam: "Amfier", leftTeamSrc: "../img/teams_logo/Amfier.png", rightTeam: "Walhalla", rightTeamSrc: "../img/teams_logo/Walhalla.png", leftScore: 16, rightScore: 8, tier: 1, tierSrc: "../img/Top_star.svg", map: "dust 2"},
            {series: "Zasada2", event: "Zasada Summer Cup", eventSrc: "../img/event_logo/Zasada2.svg", leftTeam: "Amfier", leftTeamSrc: "../img/teams_logo/Amfier.png", rightTeam: "Walhalla", rightTeamSrc: "../img/teams_logo/Walhalla.png", leftScore: 9, rightScore: 16, tier: 3, tierSrc: "../img/Top_star.svg", map: "anb"},
            {series: "Zasada2", event: "Zasada Summer Cup", eventSrc: "../img/event_logo/Zasada2.svg", leftTeam: "Amfier", leftTeamSrc: "../img/teams_logo/Amfier.png", rightTeam: "Walhalla", rightTeamSrc: "../img/teams_logo/Walhalla.png", leftScore: 2, rightScore: 0, tier: 4, tierSrc: "../img/Top_star.svg", map: "bo3"}
        ]}
    ]

    const status = "ongoing" //registration, ongoing, ended
    const isCap = true; //капитан ли смотрит
    const errors = false; // есть ли причины не попасть на турик
    const [activeJoinTourWindow, setJoinTourWindowActive] = useState(false); // окно уточнения для регистрации на турик
    const [activeLeaveTourWindow, setLeaveTourWindowActive] = useState(false); // окно уточнения "покидания" турика
    const [activeTour, setActiveTour] = useState(false); // переменная, отвечающая за то зарегана ли команда на турик
    const [activeEditTeamWindow, setActiveEditTeamWindow] = useState(false); // окно изменения состава на турик

    const [list, setList] = useState([]); //список уведомлений
    function showToast(type){ //"вывести уведомление"
        let toastProperties = null;
        switch (type){
            case "errorJoinTour":
                toastProperties = {
                    description: "Вы не можете принять участие в турнире: *причина*",
                    border: "1px solid #FF1E1E"
                }; break;
            case "successJoinTour":
                toastProperties = {
                    description: "Вы успешно зарегистрированы на турнир",
                    border: "1px solid var(--base-05)"
                }; break;
            case "successLeaveTour":
                toastProperties = {
                    description: "Вы отказались от участия в турнире",
                    border: "1px solid var(--base-05)"   
                }; break;
            case "successEditTeam":
                toastProperties = {
                    description: "Вы успешно изменили состав",
                    border: "1px solid var(--base-05)"
                }; break;
            default:
                setList([]);
        }
        setList([...list, toastProperties]);
    }
    return(
        <div>
            <div className="event_image_header">
                <div className="crop_header"><img src="../img/event_logo/IEMHeader.png" alt="IEM"/></div>
            </div>
            <div className="event_header">
                <div className="info_wrapper">
                    <span>Дата</span>
                    <div className="event_date_wrapper"><p>{tournament.date}</p></div>
                </div>

                <div className="info_wrapper">
                    <span>Приз</span>
                    <div className="event_prize_wrapper"><p>{tournament.prize}</p></div>
                </div>

                <div className="info_wrapper">
                    <span>Взнос</span>
                    <div className="event_fee_wrapper"><p>{tournament.fee}р</p></div>
                </div>

                <div className="info_wrapper">
                    <span>Команды</span>
                    <div className="event_team_wrapper"><p>{tournament.regTeams}/{tournament.teams}</p></div>
                </div>

                <div className="info_wrapper">
                    <span>Тип</span>
                    <div className="event_type_wrapper"><p>{tournament.type}</p></div>
                </div>
                
                <div className="info_wrapper">
                    <span>Формат</span>
                    <div className="event_format_wrapper"><p>{tournament.format}</p></div>
                </div>

                <div className="info_wrapper">
                    <span>Локация</span>
                    <div className="event_location_wrapper"><FlagName flagPath="img/flags/mini/Russia.svg" country="Россия" name="Россия, Пугачёв" height='12px'/></div>
                </div>
            </div>
            {(isCap && !activeTour) ? 
                <div class="join_tournament" onClick={() => setJoinTourWindowActive(true)}>
                    <p>Принять участие в турнире</p>
                </div>
                :
                <div style={{display: "flex", flexDirection: "row", margin: "0 auto", marginTop: "25px", gap: "10px", justifyContent: "center"}}>
                    <div class="leave_tournament" style={{margin: "0"}} onClick={() => setLeaveTourWindowActive(true)}>
                        <p>Отказаться от участия</p>
                    </div>
                    {tournament.format == "2x2" ? 
                    <div class="join_tournament" style={{margin: "0"}} onClick={() => setActiveEditTeamWindow(true)}>
                        <p>Изменить состав команды</p>
                    </div> :
                    null}
                    
                </div>
            }
            {status === "registration" ? <EventInfo maps={maps} part={registred} total={total} prizePlace={prizePlace} part_header={part_header} photoLink={photoLink} status="registration"/> : 
            status === "ongoing" ? drawOngoing() :
            drawEnded()}
            
            <Login active={activeJoinTourWindow} setActive={setJoinTourWindowActive}>
                <div className="header_splash_window">
                    <div className="logo_splash_window"></div>
                </div>
                <div className="info_text">
                    <p>Принять участие в турнире?</p>
                </div>
                <div className="small_buttons_wrapper">
                    <div className="small_dark_button">
                        <input type="submit" value="Нет" onClick={() => activeJoinTourWindow ? setJoinTourWindowActive(!activeJoinTourWindow) : null}/>
                    </div>
                    <div className="small_grey_button">
                        <input type="submit" value="Да" onClick={() =>  (activeJoinTourWindow && !errors)  ? (setJoinTourWindowActive(!activeJoinTourWindow), setActiveTour(true),showToast("successJoinTour")) : (setJoinTourWindowActive(!activeJoinTourWindow), showToast("errorJoinTour"))}/>
                    </div>
                </div>
            </Login>

            <Login active={activeLeaveTourWindow} setActive={setLeaveTourWindowActive}>
                <div className="header_splash_window">
                    <div className="logo_splash_window"></div>
                </div>
                <div className="info_text">
                    <p>Вы уверены, что хотите отказаться от участия в турнире?</p>
                </div>
                <div className="small_buttons_wrapper">
                    <div className="small_dark_button">
                        <input type="submit" value="Нет" onClick={() => activeLeaveTourWindow ? setLeaveTourWindowActive(!activeLeaveTourWindow) : null}/>
                    </div>
                    <div className="small_grey_button">
                        <input type="submit" value="Да" onClick={() =>  activeLeaveTourWindow  ? (setLeaveTourWindowActive(!activeLeaveTourWindow), setActiveTour(false), showToast("successLeaveTour")) : null}/>
                    </div>
                </div>
            </Login>

            <Login active={activeEditTeamWindow} setActive={setActiveEditTeamWindow}>
                <div className="header_splash_window">
                    <div className="logo_splash_window"></div>
                </div>
                <div className="info_text">
                    <p>Выберите игроков для участия в турнире</p>
                </div>
                <div class="col_center_gap30">
                    <div class="row_center_6">
                        <div className="text-field_half">
                            <input className="text-field_half input" type="text" name="login" id="login" placeholder="Выберите игрока" />
                        </div>
                        <div className="text-field_half">
                            <input className="text-field_half input" type="text" name="login" id="login" placeholder="Выберите игрока" />
                        </div>
                    </div>
                    <div className="full_grey_button" >
                        <input type="submit" value="Подтвердить" onClick={() => activeEditTeamWindow ? (setActiveEditTeamWindow(!activeEditTeamWindow), showToast("successEditTeam")) : null} />
                    </div>
                </div>
                
            </Login>

            <Notification props={list}></Notification>
        </div>
    );
}

export default Event;