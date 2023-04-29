import React from "react";
import { NavLink } from "react-router-dom";
import "./Events.css";

function Ongoing(props) {
    return(
        <NavLink to="/event" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>       
            <div className="tournament_rect">
                <div className="tournament_full">
                    <div className="event_logo"><img src={"../" + props.event.logo}/></div>
                    <div className="tournament_info">
                        <p>{props.event.name}</p>
                        <div className="tournament_sub_info">
                            <p>{props.event.date}</p>
                            <div className="participants_logo">
                                {props.event.participants.map((participant) => 
                                <img src={"../" + participant.src} alt={participant.name}/>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </NavLink>
    );
}

export default Ongoing;