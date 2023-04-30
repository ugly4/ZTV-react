import React from "react";
import "./Player.css"

function Player(props){

    return(
        <div className="player_card_wrapper">
            <div className="players_team">
                <div className="crop_team"><img src={props.photo} alt={props.nick}/></div>
            </div>
            <div className="nick_team">
            <img src={props.flagPath} alt={props.country}/>
            <p>{props.nick}</p>
            </div>
        </div>
    );
}

export default Player;