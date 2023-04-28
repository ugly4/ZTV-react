import React from "react";
import "./Trophies.css"

function Trophies(props){
    return (
        <div class="trophies_container">
            <div id="trophies">
            {props.items.trophies.map((item) => 
                <img key={item.id} src={item.src} alt={item.alt}/>
                )}
            </div>
        </div>
    );
}
export default Trophies;
