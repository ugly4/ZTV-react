import React from "react";
import './PlayerRow.css'

function PlayerRow({props,team}){
    return(
        <div class="statistic_player_row">
            <div class="statistic_player_row_nick">
                <img></img>
                <p>{props.firstName}</p>
                <p style={{fontFamily: "var(--text-medium-lcg)"}}>"{props.nick}"</p>
                <p>{props.lastName}</p>
            </div>
        </div>
    )
}

export default PlayerRow;