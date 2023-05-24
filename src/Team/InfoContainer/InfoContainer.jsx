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
            primaryImg={"../../" + props.logo}
            secondaryImg={"../../img/PhotoHover.svg"}
            alt={props.name} 
          />
        </label>
        <input id="file-input" type="file"/>
      </div>
      :
      <div className="team_logo">
        <img src={"../../" + props.logo} alt={props.name}/>
      </div>
    );
    
  }

    return(
        <div className="info_container">
              <div className="team_info">
                {showLogo()}
                <div className="info_teamname">
                  <div className="flag_location">
                    <img src={"../../" + props.flagPath} alt={props.country}/>
                    <p>{props.country}, {props.city}</p>
                  </div>
                  <p>{props.name}</p>
                </div>
              </div>
              <div className="top_position">
                <p>Место в рейтинге</p>
                <p>#{props.topPosition}</p>
              </div>
            </div>
    )
}

export default InfoContainer;