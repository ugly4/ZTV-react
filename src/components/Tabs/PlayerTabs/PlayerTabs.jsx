import React from "react";
import {Routes, Route, NavLink} from 'react-router-dom'
import Stats from "./Tabs/Stats/Stats";
import Matches from "./Tabs/Matches/Matches";
import "./PlayerTabs.css"

function PlayerTabs(props){
    return(
        <div>
            <ul className="playerTab">
                <li className="tab_link">
                    <NavLink to="stats" style={({ isActive }) => ({  // если активна, то текст белый
                        color: isActive ? 'var(--text-01)' : 'var(--text-02)'})}>
                        Статистика
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
                    <NavLink to="teams" style={({ isActive }) => ({  // если активна, то текст белый
                        color: isActive ? 'var(--text-01)' : 'var(--text-02)'})}>
                        Команды
                    </NavLink>
                </li>
            </ul>
            <Routes>
                <Route path="stats" element={<Stats stats={props.stat}/>}/>
                <Route path="matches" element={<Matches/>}/>
                <Route path="events" element={<p>Турниры игрока</p>}/>
                <Route path="achievements" element={<p>Достижения игрока</p>}/>
                <Route path="teams" element={<p>Команды игрока</p>}/>
            </Routes>
        </div>
    );
}

export default PlayerTabs;