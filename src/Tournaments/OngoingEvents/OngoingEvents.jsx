import React from "react";
import OngoingEventsMaker from "../../components/EventMaker/OngoingEventsMaker/OngoingEventsMaker";
import './OngoingEvents.css';

function OngoingEvents(props) {

    return(
        <div>
            <div className="events_header"><p>Текущие турниры</p></div>
            <div className="events_spacer">
                <div class="events_upcoming">
                    <OngoingEventsMaker events={props.ongoing}/>
                </div>
            </div>
            
            <div className="events_header"><p>Будущие турниры</p></div>
            <div className="events_spacer">
                {props.featured.map((month)=>
                    <div className="events_date_wrapper">
                        <div className="events_date"><p>{month.date}</p></div>
                        <div className="events_upcoming">
                            <OngoingEventsMaker events={month.events}/>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default OngoingEvents;