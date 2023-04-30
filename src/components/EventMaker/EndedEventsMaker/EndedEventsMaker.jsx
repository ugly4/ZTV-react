import React from "react";
import FlagName from "../../FlagName/FlagName";
import './EndedEventsMaker.css';
import '../../ResultMaker/ResultMaker.css';

function EndedEventsMaker(props){
    const getName = (country, city, type) =>{
        if(type === "Lan"){
            if(city === ""){
                return country;
            }
            return country + ", " + city;
        }
        return country;
    }

    return(
        <div className="events_date_wrapper">
            {props.events.map((ev) =>
                <div className="event_rect_match">
                    <div className="past_event_info">
                        <div class="tournament_logo"><img src={"../" + ev.src} alt={ev.series}/></div>
                        <div class="sub_up_info_wrapper">
                            <div class="event_name"><p>{ev.event}</p></div>
                            <div class="sub_past_info">
                                <FlagName flagPath={"../" + ev.flagPath} country={ev.country} name={getName(ev.country, ev.city, ev.type)} height="10px"/>
                                <p>|</p>
                                <p>{ev.date}</p>
                            </div>
                        </div>
                    </div>
                    <div class="event_spec">
                        <div class="main_info_wrapper">
                            <p>{ev.registred}/{ev.total}</p>
                            <div class="main_sub_info_wrapper"><p>Команд</p></div>
                        </div>
                        <div class="main_info_wrapper">
                            <p>{ev.prize}</p>
                            <div class="main_sub_info_wrapper"><p>Приз</p></div>
                        </div>
                        <div class="main_info_wrapper">
                            <p>{ev.fee}</p>
                            <div class="main_sub_info_wrapper"><p>Взнос</p></div>
                        </div>
                        <div class="main_info_wrapper">
                            <p>{ev.type}</p>
                            <div class="main_sub_info_wrapper"><p>Тип</p></div>
                        </div>
                        <div class="main_info_wrapper">
                            <p>{ev.format}</p>
                            <div class="main_sub_info_wrapper"><p>Формат</p></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default EndedEventsMaker;