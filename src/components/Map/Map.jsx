import React from "react";
import "./Map.css"

function Map(props){
    const maps = ["Ancient", "Anubis", "Cache", "Cobblestone", "Dust", "Dust2", 
    "Inferno", "Mirage", "Nuke", "Overpass", "Train", "Vertigo"];

    const isFound = (inputMap) => {
        return maps.some(map => map === inputMap);
    }

    return(
        <div className="map_wrapper">
            <img src= {"../img/map_preview/" + (isFound(props.map) ? props.map : "TBA") + ".png"} alt={props.map}/>
            <div className="map_name_wrapper"><p>{props.map}</p></div>
        </div>
    );
}

export default Map;