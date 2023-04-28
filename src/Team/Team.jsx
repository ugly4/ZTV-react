import React from "react";
import TeamTabs from "../components/Tabs/TeamTabs/TeamTabs";
import Trophies from "../components/Trophies/Trophies";
import { Link } from "react-router-dom";
import Player from "./Player/Player"
import "./Team.css"
import InfoContainer from "./InfoContainer/InfoContainer";

function Team() {
    
    const trophies = {
      trophies : [
            {id: 1, src: "img/trophies/cup1.svg", alt: "cup1"},
            {id: 2, src: "img/trophies/cup2.svg", alt: "cup2"},
            {id: 3, src: "img/trophies/cup3.svg", alt: "cup3"},
            {id: 4, src: "img/trophies/cup1.svg", alt: "cup1"},
            {id: 5, src: "img/trophies/cup2.svg", alt: "cup2"},
            {id: 6, src: "img/trophies/cup3.svg", alt: "cup3"},
            {id: 7, src: "img/trophies/cup1.svg", alt: "cup1"},
            {id: 8, src: "img/trophies/cup2.svg", alt: "cup2"},
            {id: 9, src: "img/trophies/cup3.svg", alt: "cup3"},
            {id: 10, src: "img/trophies/cup1.svg", alt: "cup1"},
            {id: 11, src: "img/trophies/cup2.svg", alt: "cup2"},
            {id: 12, src: "img/trophies/cup3.svg", alt: "cup3"},
            {id: 13, src: "img/trophies/cup1.svg", alt: "cup1"},
            {id: 14, src: "img/trophies/cup2.svg", alt: "cup2"},
            {id: 15, src: "img/trophies/cup3.svg", alt: "cup3"},
            {id: 16, src: "img/trophies/cup1.svg", alt: "cup1"},
            {id: 17, src: "img/trophies/cup2.svg", alt: "cup2"},
            {id: 18, src: "img/trophies/cup3.svg", alt: "cup3"},
            {id: 19, src: "img/trophies/cup1.svg", alt: "cup1"},
            {id: 20, src: "img/trophies/cup2.svg", alt: "cup2"},
            {id: 21, src: "img/trophies/cup3.svg", alt: "cup3"},
            {id: 22, src: "img/trophies/cup1.svg", alt: "cup1"},
            {id: 23, src: "img/trophies/cup2.svg", alt: "cup2"},
            {id: 24, src: "img/trophies/cup3.svg", alt: "cup3"}
        ]
    }
    const tamada = {
        nick: "Tamada",
        photo: "img/players/Tamada.png",
        flagPath: "img/flags/mini/Spain.svg"
    }
    const team = {
        logo: "img/teams_logo/Amfier.png",
        flagPath: "img/flags/mini/Russia.svg",
        country: "Россия",
        city: "Пугачёв",
        name: "Amfier",
        topPosition: 1
    }
    return(
        <div >
          
          <div>
            <div class="team_rectangle">
                <Link to="/player" style={{textDecoration: "none"}}>
                    <Player {...tamada}/>
                </Link>
                
                <div class="player_card_wrapper">
                  <div class="players_team">
                      <div class="crop_team"><img id="team_player2" src="img/players/Hitriy_Kazah.png" alt="Hitriy_Kazah"/></div>
                  </div>
                  <div class="nick_team">
                    <img id="team_player2_flag" src="img/flags/mini/Kosovo.svg" alt="Косово"/>
                    <p>Hitriy_Kazah</p>
                  </div>
                </div>
                <div class="player_card_wrapper">
                  <div class="players_team">
                      <div class="crop_team"><img id="team_player3" src="img/players/_SD_.png" alt="_SD_"/></div>
                  </div>
                  <div class="nick_team">
                    <img id="team_player3_flag" src="img/flags/mini/IsleOfMan.svg" alt="Остров Мэн"/>
                    <p>_SD_</p>
                  </div>
                </div>
                <div class="player_card_wrapper">
                  <div class="players_team">
                      <div class="crop_team"><img id="team_player4" src="img/players/rusttle.png" alt="rusttle"/></div>
                  </div>
                  <div class="nick_team">
                    <img id="team_player4_flag" src="img/flags/mini/Belize.svg" alt="Белиз"/>
                    <p>rusttle</p>
                  </div>
                </div>
                <div class="player_card_wrapper">
                  <div class="players_team">
                      <div class="crop_team"><img id="team_player5" src="img/players/ugly4.png" alt="ugly4"/></div>
                  </div>
                  <div class="nick_team">
                    <img id="team_player5_flag" src="img/flags/mini/Russia.svg" alt="Россия"/>
                    <p>ugly4</p>
                  </div>
                </div>
            </div>

            <div class="devider_line"></div>

            <InfoContainer {...team}/>

            <div class="devider_line"></div>

            <Trophies items={trophies}/>

        </div>
          
        <TeamTabs/>
          
    </div>
    )
    
};

export default Team;
