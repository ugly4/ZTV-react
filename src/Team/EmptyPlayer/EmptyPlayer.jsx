import React from "react";
import { useState } from "react";

function EmptyPlayer(props){

    const isCap = true;
    const [mouseOutCard, setMouseOutCard] = useState(true); //Для ховера "пустого" игрока
    const [mouseOnCard, setMouseOnCard] = useState(false); //Для ховера "пустого" игрока

    const toggleOnMouseOver = () => { //парсинг курсора на "пустом" игроке
        return(
            mouseOutCard ? 
              <img className="kick_hover" src="../../img/KickHovered.svg" alt="Удаление игрока"/> //нет ховера
        : 
              <div className="img_hover_wrapper_in_team" onMouseOut={() => {setMouseOutCard(true); setMouseOnCard(false)}} > 
                  <img className="kick_hover" src="../../img/addPlayer.svg" alt="Добавление игрока" onClick={() => props.setWindowAddPlayerActive(true)}/> 
              </div> //Есть ховер
        );
    }
    return(
        <div className="team_player_card_wrapper" onMouseOut={() => {setMouseOutCard(true); setMouseOnCard(false)}} onMouseOver={() => {setMouseOutCard(false); setMouseOnCard(true)}}>
            {isCap ? toggleOnMouseOver() :
            <img className="kick_hover" src="../../img/KickHovered.svg" alt="Нет игрока"/>
            }
        </div>
    )
}

export default EmptyPlayer;