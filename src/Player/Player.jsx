import React from "react";
import FlagName from "../components/Player/FlagName";
import "./Player.css"
import "../../src/Team/Team.css"

function Player(){
    //Короче, про отображение лого, фотки, ника и, соответственно, alt в фотках - 
    //всё это как-то из БД должно тянуться, может через пропсы
    return(
    <div class="user_back">
        <div class="player_card_wrapper">
            <div class="player_team_logo"><img src="img/teams_logo/Amfier.png" alt="Amfier"/></div>
            <div class="player">
                <div class="crop_player"><img src="img/players/Tamada.png" alt="Tamada"/></div>
            </div>
        </div>
        <div class="player_info">
            <div class="player_nick"><p>Tamada</p></div>
            <FlagName flagPath="img/flags/mini/Russia.svg" country="Россия" name="Кирилл Симовин"/>
        </div>
    </div>
    );
}

export default Player;