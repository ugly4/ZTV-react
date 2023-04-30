import React from "react";
import "./Achievments.css";
import "../Events/Events.css";

function AchievmentsMaker(props){
    const placeType = (place) =>{
        const first = "brightness(0) saturate(100%) invert(19%) sepia(71%) saturate(1218%) hue-rotate(25deg) brightness(99%) contrast(103%)";
        const second = "brightness(0) saturate(100%) invert(30%) sepia(0%) saturate(0%) hue-rotate(213deg) brightness(97%) contrast(86%)";
        const third = "invert(16%) sepia(86%) saturate(556%) hue-rotate(351deg) brightness(98%) contrast(100%)";
        
        if(place.startsWith("1")){
            return(
                <div class="achievement" style={{background: "#EDB404"}}>
                    <img src="../img/Trophy.svg" style={{filter: first}} alt="gold"/>
                    <p style={{color: "#503B00"}}>{place}</p>
                </div>
            );
        }
        else if(place.startsWith("2")){
            return(
                <div class="achievement" style={{background: "#C0C0C0"}}>
                    <img src="../img/Trophy.svg" style={{filter: second}} alt="silver"/>
                    <p style={{color: "#525252"}}>{place}</p>
                </div>
            );
        }
        else if(place.startsWith("3")){
            return(
                <div class="achievement" style={{background: "#CD7F32"}}>
                    <img src="../img/Trophy.svg" style={{filter: third}} alt="bronze"/>
                    <p style={{color: "#502A05"}}>{place}</p>
                </div>
            );
        }
    }

    return(
        <div class="tournament_rect">
            <div class="place_event_wrapper">
                {placeType(props.event.place)}
                <div class="ev_info">
                    <div class="event_logo"><img src={"../" + props.event.logo}/></div>
                    <div class="tournament_info">
                    <p>{props.event.name}</p>
                    <div class="tournament_sub_info">
                        <p>{props.event.date}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AchievmentsMaker;