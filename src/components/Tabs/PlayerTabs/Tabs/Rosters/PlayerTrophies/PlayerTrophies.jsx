import React from "react";
import "./PlayerTrophies.css"

function PlayerTrophies(props){
    return (
        <div class="player_trophies_container">
            <div id="player_trophies">
                {props.items.trophies.map((item) => 
                <img key={item.id} src={'../../' + item.src} alt={item.alt}/>
                )}
            </div>
        </div>
    );
}
export default PlayerTrophies;