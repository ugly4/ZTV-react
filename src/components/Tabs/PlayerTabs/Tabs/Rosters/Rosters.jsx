import React from "react";
import PlayerTrophies from "./PlayerTrophies/PlayerTrophies";
import "./Rosters.css";

function Rosters(props){
    return(
        <div class="roster">
            <div class="teams_stats">
                <div class="stat_box">
                    <div class="stat_box_wrapper">
                        <p>{props.rosters.length}</p>
                        <div class="stat_down"><p>Команд</p></div>
                    </div>
                </div>

                <div class="stat_box">
                    <div class="stat_box_wrapper">
                        <p>N</p>
                        <div class="stat_down"><p>Дней в текущей команде</p></div>
                    </div>
                </div>

                <div class="stat_box">
                    <div class="stat_box_wrapper">
                        <p>Y</p>
                        <div class="stat_down"><p>Дней в командах</p></div>
                    </div>
                </div>
            </div>
            <div className="teams_history">
                <div className="col_names">
                    <p>Временной период</p>
                    <div className="col_names_team"><p>Команда</p></div>
                    <div className="col_names_trophies"><p>Трофеи</p></div>
                </div>
                <div class="teams_wrapper">
                    {props.rosters.map((team) =>
                    <div class="rect_team" key={team.id}>
                        <div class="period_wrapper"><p>{team.period}</p></div>
                        <div class="team_wrapper">
                            <img src={'../../' + team.teamLogo} alt={team.team}/>
                            <p>{team.team}</p>
                        </div>
                        <PlayerTrophies items={team}/>
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Rosters;