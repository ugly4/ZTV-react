import React from "react";
import Match from "../Match/Match";
import {NavLink} from 'react-router-dom';
import "./Matches.css"

function Matches(props){

    const isUpcoming = () =>{
        if(props.matches_upcoming.length > 0){
            return(
                <div>
                    <div className="time_header"><p>Ближайшие матчи</p></div>
                    <div className="match_col">
                        <p>Дата</p>
                        <p>Матч</p>
                    </div>
                    <div className="tournaments">
                        {props.matches_upcoming.map((ev) => <Match event={ev}/>)}
                    </div>
                </div>
            );
        }
    }

    const isPast = () =>{
        if(props.matches_ended.length > 0){
            return(
                <div>
                    <div className="time_header"><p>Прошедшие матчи</p></div>
                    <div className="match_col">
                        <p>Дата</p>
                        <p>Матч</p>
                    </div>
                    <div className="tournaments">
                        {props.matches_ended.map((ev) => <Match event={ev}/>)}
                    </div>
                </div>
            );
        }
    }

    const buttonText = props.type === "team" ? "Все результаты команды" : "Все результаты игрока";
    const link = props.type === "team" ? ("/team_results/" + props.param) : ("/player_results/" + props.param);

    return(
        <div className="tab_matches">
            {isUpcoming()}

            {isPast()}

            <div className="full_grey_button_gap15">
                <NavLink to={link} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>
                  <input type="submit" id="loginsubmit" value={buttonText}/>
                </NavLink>
            </div>
        </div>
    );
}

export default Matches;