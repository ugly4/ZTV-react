import React from "react";
import "./Player.css"
import { useState } from "react";
import Login from "../../Login/Login";

function Player(props){
    const [mouseOutCard, setMouseOutCard] = useState(true); //Для ховера игрока
    const [mouseOnCard, setMouseOnCard] = useState(false); //Для ховера игрока
    const isCap = true;
    const toggleOnMouseOver = () => {
        return(
            mouseOutCard ? 
                <div>
                    <div className="players_team">
                        <div className="crop_team"><img src={"../../" + props.photo} alt={props.nick}/></div>
                    </div>
                    <div className="nick_team">
                        <img src={"../../" + props.flagPath} alt={props.country}/>
                        <p>{props.nick}</p>
                    </div>
                </div>
            : 
                <div className="img_hover_wrapper_in_team" onMouseOut={() => {setMouseOutCard(true); setMouseOnCard(false)}} onClick={() => setkickActive(true)}>
                    <div style={{opacity: "0.4"}}>
                        <div className="players_team">
                            <div className="crop_team"><img src={"../../" + props.photo} alt={props.nick}/></div>
                        </div>
                        <div className="nick_team">
                            <img src={"../../" + props.flagPath} alt={props.country}/>
                            <p>{props.nick}</p>
                        </div>
                    </div>
                    <img className="kick_hover" src="../../img/KickHovered.svg" alt="Удаление игрока"/>
                    
                    
                </div>
        );
    }

    const [kickActive, setkickActive] = useState(false);
    const handleClick = () => {
      setkickActive(!kickActive);
    };

    return(
        <div className="team_player_card_wrapper" onMouseOut={() => {setMouseOutCard(true); setMouseOnCard(false)}} onMouseOver={() => {setMouseOutCard(false); setMouseOnCard(true)}}>
            {isCap ? toggleOnMouseOver() :
            <div>
                <div className="players_team">
                    <div className="crop_team"><img src={"../../" + props.photo} alt={props.nick}/></div>
                </div>
                <div className="nick_team">
                    <img src={"../../" + props.flagPath} alt={props.country}/>
                    <p>{props.nick}</p>
                </div>
            </div>
            }

        <Login active={kickActive} setActive={setkickActive}>
            <div className="header_splash_window">
                <div className="logo_splash_window"></div>
            </div>
            <div className="info_text">
                <p>Вы уверены, что хотите исключить игрока {props.nick}?</p>
            </div>
            <div className="small_buttons_wrapper">
                <div className="small_dark_button">
                    <input type="submit" value="Нет" onClick={() => kickActive ? setkickActive(!kickActive) : null}/>
                </div>
                <div className="small_grey_button">
                    <input type="submit" value="Да" onClick={() => kickActive ? setkickActive(!kickActive) : null}/>
                </div>
            </div>
          
        </Login>
        </div>
    );
}

export default Player;