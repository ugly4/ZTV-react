import React from "react";
import "./FlagName.css"

export default function FlagName(props) {
    console.log("ГДЕ ФЛАГ", props);
    return(
    <div class="flag_name">
        <img src={props.flagPath} alt={props.country} style={{height: props.height}}/>
        <p>{props.name}</p>
    </div>
    );
}