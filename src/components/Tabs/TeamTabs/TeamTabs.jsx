import React from "react";
import {Routes, Route, NavLink} from 'react-router-dom'
import Team from "../../../Team/Team"
import Description from "./Tabs/Description/Description"
import Matches from "./Tabs/Matches/Matches"
import Achievments from "./Tabs/Achievments/Achievments"
import Events from "./Tabs/Events/Events"
import Structure from "./Tabs/Structure/Structure"
import "./TeamTabs.css"

function TeamTabs(props){
    console.log(props.location);
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
            <Routes location={props.location}>
                <Route path="description" element={<Description />}/>
                <Route path="matches" element={<Matches />}/>
                <Route path="events" element={<Events />}/>
                <Route path="achievements" element={<Achievments />}/>
                <Route path="structure" element={<Structure />}/>
            </Routes>
        </div>
    );
}

export default TeamTabs;