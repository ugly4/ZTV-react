import React from "react";
import "./AttendedEvents.css";
import "../Tabs/Events/Events.css";
import "../../Results/Results.css";


function AttendedEvents(props) {
    return(
        <div class="event_rect">
        <div class="event_wrapper">
            <div class="event_info_wrapper">
                <div class="event_place"><p>{props.event.place}</p></div>
                <div class="event_information">
                    <div class="event_logo"><img src={props.event.logo} alt={props.event.event}/></div>
                    <div class="tournament_info">
                      <p>{props.event.event}</p>
                      <div class="tournament_sub_info">
                        <p>{props.event.date}</p>
                      </div>
                    </div>
                </div>
                <div class="event_team_space_border">
                    <div class="event_team">
                        <img src={props.event.teamSrc} alt={props.event.team}/>
                        <p>{props.event.team}</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default AttendedEvents;