import React from "react";
import "./InfoContainer.css"

function InfoContainer(props){
    return(
        <div class="info_container">
              <div class="team_info">
                <img src={props.logo} id="team_logo"/>
                <div class="info_teamname">
                  <div class="flag_location">
                    <img id="team_flag" src={props.flagPath} alt={props.country}/>
                    <p id="team_location">{props.country}, {props.city}</p>
                  </div>
                  <p>{props.name}</p>
                </div>
              </div>
              <div class="top_position">
                <p>Место в рейтинге</p>
                <p id="team_top_position">#{props.topPosition}</p>
              </div>
            </div>
    )
}

export default InfoContainer;