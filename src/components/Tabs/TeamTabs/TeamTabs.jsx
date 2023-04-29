import React from "react";
import {Routes, Route, NavLink, Navigate} from 'react-router-dom';
import Description from "./Tabs/Description/Description";
import Achievments from "../Achievments/Achievments";
import Events from "../Events/Events";
import Structure from "./Tabs/Structure/Structure";
import Matches from "../Matches/Matches";
import "./TeamTabs.css";

function TeamTabs(props){
    console.log("ТЕСТ", props);
    return(
        <div>
            <ul className="teamTab">
                <li className="tab_link">
                    <NavLink to="description" style={({ isActive }) => ({  // если активна, то текст белый
                        color: isActive ? 'var(--text-01)' : 'var(--text-02)'})}>
                        Описание
                    </NavLink>
                </li>
                <li className="tab_link">
                    <NavLink to="matches" style={({ isActive }) => ({  // если активна, то текст белый
                        color: isActive ? 'var(--text-01)' : 'var(--text-02)'})}>
                        Матчи
                    </NavLink>
                </li>
                <li className="tab_link">
                    <NavLink to="events" style={({ isActive }) => ({  // если активна, то текст белый
                        color: isActive ? 'var(--text-01)' : 'var(--text-02)'})}>
                        Турниры
                    </NavLink>
                </li>
                <li className="tab_link">
                    <NavLink to="achievements" style={({ isActive }) => ({  // если активна, то текст белый
                        color: isActive ? 'var(--text-01)' : 'var(--text-02)'})}>
                        Достижения
                    </NavLink>
                </li>
                <li className="tab_link">
                    <NavLink to="structure" style={({ isActive }) => ({  // если активна, то текст белый
                        color: isActive ? 'var(--text-01)' : 'var(--text-02)'})}>
                        Состав
                    </NavLink>
                </li>
            </ul>
            <Routes>
                <Route index element={<Navigate replace to="/team/description" />}/>
                <Route path="description" element={<Description desc={props.description}/>}/>
                <Route path="matches" element={<Matches matches_upcoming={props.matches_upcoming} matches_ended={props.matches_ended} type="team"/>}/>
                <Route path="events" element={<Events ongoing={props.ongoing_events} ended={props.ended_events} type="team"/>}/>
                <Route path="achievements" element={<Achievments lan={props.lan_events} online={props.online_events}/>}/>
                <Route path="structure" element={<Structure roster={props.players} ex_players={props.ex_players}/>}/>
            </Routes>
        </div>
    );
}

export default TeamTabs;