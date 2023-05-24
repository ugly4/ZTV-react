import React from "react";
import { Link } from "react-router-dom";
import PlayerTrophies from "./PlayerTrophies/PlayerTrophies";
import { fillSpaces } from "../../../../Helper/Helper";
import "./Rosters.css";

function Rosters(props){
    return(
        <div className="roster">
            <div className="teams_stats">
                <div className="stat_box">
                    <div className="stat_box_wrapper">
                        <p>{props.rosters.length}</p>
                        <div className="stat_down"><p>Команд</p></div>
                    </div>
                </div>

                <div className="stat_box">
                    <div className="stat_box_wrapper">
                        <p>N</p>
                        <div className="stat_down"><p>Дней в текущей команде</p></div>
                    </div>
                </div>

                <div className="stat_box">
                    <div className="stat_box_wrapper">
                        <p>Y</p>
                        <div className="stat_down"><p>Дней в командах</p></div>
                    </div>
                </div>
            </div>
            <div className="teams_history">
                <div className="col_names">
                    <p>Временной период</p>
                    <div className="col_names_team"><p>Команда</p></div>
                    <div className="col_names_trophies"><p>Трофеи</p></div>
                </div>
                <div className="teams_wrapper">
                    {props.rosters.map((team) =>
                        <div className="rect_team" key={team.team}>
                            <div className="period_wrapper"><p>{team.period}</p></div>
                            <Link to={"/team/" + fillSpaces(team.team)} style={{textDecoration: "none"}}>
                                <div className="team_wrapper">
                                    <img src={'../../' + team.teamLogo} alt={team.team}/>
                                    <p>{team.team}</p>
                                </div>
                            </Link>
                            <PlayerTrophies items={team}/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Rosters;