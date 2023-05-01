import React from "react";
import { useRef } from 'react';
import "./InfoContainer.css"

function InfoContainer(props){

  const ImageToggleOnMouseOver = ({primaryImg, secondaryImg, alt}) => {
    const imageRef = useRef(null);
  
    return (
      <img 
        onMouseOver={() => {
          imageRef.current.src = secondaryImg;
          imageRef.current.className = "hovered";
        }}
        onMouseOut={() => {
          imageRef.current.src= primaryImg;
          imageRef.current.className = "";
        }}
        src={primaryImg} 
        alt={alt}
        ref={imageRef}
        className=""
      />
    )
  }

  const showLogo = () => {
    return(
      props.isCapAdmin ? 
      <div className="team_logo">
        <label for="file-input">
          <ImageToggleOnMouseOver
            primaryImg={props.logo}
            secondaryImg={"../img/PhotoHover.svg"}
            alt={props.name} 
          />
        </label>
        <input id="file-input" type="file"/>
      </div>
      :
      <div className="team_logo">
        <img src={props.logo} alt={props.name}/>
      </div>
    );
    
  }

    return(
        <div class="info_container">
              <div class="team_info">
                {showLogo()}
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