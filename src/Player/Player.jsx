import React from "react";
import FlagName from "../components/Player/FlagName";
import "./Player.css"
import "../../src/Team/Team.css"

function Player(){
    //Короче, про отображение лого, фотки, ника и, соответственно, alt в фотках - 
    //всё это как-то из БД должно тянуться, может через пропсы
    const isAdmin = true;
    const nick = isAdmin ? "Tamada (Админ)" : "Tamada";
    const social = {
        items : [
            {id: 1, src: "img/social/VK.svg", alt: "VK", active: true, color: "white"}, 
            {id: 2, src: "img/social/Steam.svg", alt: "Steam", active: true, color: "white"},
            {id: 3, src: "img/social/Discord.svg", alt: "Discord", active: true, color: "colored"},
            {id: 4, src: "img/social/Faceit.svg", alt: "Faceit", active: true, color: "colored"}
        ]
    }

    const trophies = {
        items : [
            {id: 1, src: "img/trophies/cup1.svg", alt: "cup1"},
            {id: 1, src: "img/trophies/cup2.svg", alt: "cup2"},
            {id: 1, src: "img/trophies/cup3.svg", alt: "cup3"},
            {id: 1, src: "img/trophies/cup1.svg", alt: "cup1"},
            {id: 1, src: "img/trophies/cup2.svg", alt: "cup2"},
            {id: 1, src: "img/trophies/cup3.svg", alt: "cup3"}
        ]
    }

    return(
    <div>
        <div class="user_back">
            <div class="player_card_wrapper">
                <div class="player_team_logo"><img src="img/teams_logo/Amfier.png" alt="Amfier"/></div>
                <div class="player">
                    <div class="crop_player"><img src="img/players/Tamada.png" alt="Tamada"/></div>
                </div>
            </div>
            <div class="player_info">
                <div class="player_nick"><p>{nick}</p></div>
                <FlagName flagPath="img/flags/mini/Russia.svg" country="Россия" name="Кирилл Симовин"/>
                <div class="devider_info">
                    <div class="devider_info_line">
                        <span>Возраст</span>
                        <p>Не указано</p>
                    </div>
                    <div class="devider_subline"></div>
                </div>
                <div class="devider_info">
                    <div class="devider_info_line">
                        <span>Текущая команда</span>
                        <div class="devider_team">
                            <div class="devider_team_logo"><img src="img/teams_logo/Amfier.png" alt="Amfier"/></div>
                            <p>ПУПА</p>
                        </div>
                    </div>
                    <div class="devider_subline"></div>
                </div>
                <div class="devider_info">
                    <div class="devider_info_line">
                        <span>Социальные сети</span>
                        <div class="social_media">
                            {social.items.map((item) => 
                            <img key={item.id} className={item.active === true ? item.color === "white" ? 'active' : 'active_colored': item.color === "white" ? 'inactive' : 'inactive_colored'} src={item.src} alt={item.alt}/>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="devider_line"></div>
        
    </div>
    
    );
}

export default Player;