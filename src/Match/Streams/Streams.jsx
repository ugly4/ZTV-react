import React from "react";
import FlagName from "../../components/FlagName/FlagName"
import "./Streams.css"

function Streams(props){
    return (
    <div class="stream">
        <FlagName flagPath={props.flagPath} country={props.country} name={props.name} height="15px"/>
        {/* <div class="inline_block">
            <img src={props.flagPath} class="stream_country" />
            <p>{props.name}</p>
        </div> */}
        <div class="stream_viewers">
            <p>{props.viewers}</p>
            <a href={props.link}></a>
        </div>
    </div>
    )
    
}

export default Streams;