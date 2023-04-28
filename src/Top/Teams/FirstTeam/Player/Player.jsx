import React from "react";
import "./Player.css"

function Player(props){
    return(
        <div class="player_top">
            <div class="players_background">
                <div class="crop">
                    <img id="top_team_player1" src={props.photo} alt={props.nick} />
                </div>
            </div>
            <div class="nick">
                <img id="top_team_player1_flag" src={props.flagPath} alt={props.country} />
                <p>{props.nick}</p>
            </div>
        </div>
    )
}

export default Player;