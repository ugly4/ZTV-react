import React from "react";
import "./Player.css"
import { useState } from "react";
import Login from "../../Login/Login";

function Player(props){
    const player = props.player;
    const [mouseOutCard, setMouseOutCard] = useState(true); //Для ховера игрока
    const [mouseOnCard, setMouseOnCard] = useState(false); //Для ховера игрока
    const isCap = true;
    const toggleOnMouseOver = () => {
        return(
            mouseOutCard ? 
                <div>
                    <div className="players_team">
                        <div className="crop_team"><img src={"../../" + player.photo} alt={player.nick}/></div>
                    </div>
                    <div className="nick_team">
                        <img src={"../../" + player.flagPath} alt={player.country}/>
                        <p>{player.nick}</p>
                    </div>
                </div>
            : 
                <div className="img_hover_wrapper_in_team" onMouseOut={() => {setMouseOutCard(true); setMouseOnCard(false)}} onClick={() => setkickActive(true)}>
                    <div style={{opacity: "0.4"}}>
                        <div className="players_team">
                            <div className="crop_team"><img src={"../../" + player.photo} alt={player.nick}/></div>
                        </div>
                        <div className="nick_team">
                            <img src={"../../" + player.flagPath} alt={player.country}/>
                            <p>{player.nick}</p>
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

    function removePlayer(rmvPlayer){ //функция кика игрока
        props.updatePlayers(props.players.filter(player => !(player.nick.includes(rmvPlayer.nick)))); //удаляем игрока из массива команды
        // let updatedList = props.players.map(player => 
        //     {
        //       if (player.nick == rmvPlayer.nick){
        //         return {...player, nick:"", photo:"", flagPath: "", country: ""}; //gets everything that was already in item, and updates "done"
        //       }
        //       return player; // else return unmodified item 
        //     });
        // props.updatePlayers(updatedList);
        props.updateExPlayers([...props.ex_players, rmvPlayer]); //добавляем игрока в "бывшие"
    }

    return(
        <div className="team_player_card_wrapper" onMouseOut={() => {setMouseOutCard(true); setMouseOnCard(false)}} onMouseOver={() => {setMouseOutCard(false); setMouseOnCard(true)}}>
            {isCap ? toggleOnMouseOver() :
            <div>
                <div className="players_team">
                    <div className="crop_team"><img src={"../../" + player.photo} alt={player.nick}/></div>
                </div>
                <div className="nick_team">
                    <img src={"../../" + player.flagPath} alt={player.country}/>
                    <p>{player.nick}</p>
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
                    <input type="submit" value="Да" onClick={() => {removePlayer(player); setkickActive(false)}}/>
                </div>
            </div>
          
        </Login>
        </div>
    );
}

export default Player;