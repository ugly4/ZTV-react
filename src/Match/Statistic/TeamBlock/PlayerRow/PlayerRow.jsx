import React from "react";
import './PlayerRow.css'

function PlayerRow({props,team}){
    function countryImg(country){
        return "img/flags/mini/" + country + ".svg";
    }
   
    return(
        <div class="statistic_player_row">
            <div class="statistic_player_row_nick">
                <img class="player_row_flag" src={countryImg(props.country)}></img>
                <p>{props.firstName}</p>
                <p style={{fontFamily: "var(--text-medium-lcg)"}}>"{props.nick}"</p>
                <p>{props.lastName}</p>
            </div>
            <div class="kills-deaths_text">
                <p>{props.kills}-{props.deaths}</p>
            </div>
            <div class="plus_minus">
                <p style={{color: !(props.kills == props.deaths) ? (props.kills>props.deaths) ? "green" : "red" : "white"}}>
                    {(props.kills>props.deaths) ? "+" : null}{props.kills-props.deaths}
                </p>
            </div>
            <div class="cyp_text">
                <p>{props.cyp}</p>
            </div>
            <div class="k-d_texts">
                <p>{props.deaths == 0 ? props.kills : (props.kills/props.deaths).toFixed(2)}</p>
            </div>
        </div>
    )
}

export default PlayerRow;