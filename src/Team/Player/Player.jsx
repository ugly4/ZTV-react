import React from "react";
import "./Player.css"

function Player(props){

    return(
        <div class="player_card_wrapper">
            <div class="players_team">
                <div class="crop_team"><img id="team_player1" src={props.photo} alt={props.nick}/></div>
            </div>
            <div class="nick_team">
            <img id="team_player1_flag" src={props.flagPath} alt="Испания"/>
            <p>{props.nick}</p>
            </div>
        </div>
    );
}

export default Player;