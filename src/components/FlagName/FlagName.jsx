import React from "react";
import "./FlagName.css"

export default function FlagName(props) {
    return(
    <div class="flag_name">
        <img src={props.flagPath} alt={props.country}/>
        <p>{props.name}</p>
    </div>
    );
}