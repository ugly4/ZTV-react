import React from "react";
import "./FirstTeam.css"
import { Link } from "react-router-dom";
import Player from "./Player/Player"

function FirstTeam(props){
    return(
        <div>
              <div class="rectangle_50px_top">
                <div class="row_center_6">
                  <div class="rectangle_50px_top_text"><p>#{props.topPosition}</p></div>
                  <div class="row_center_gap3">
                    <img src={props.logo} id="top_1_team_logo" />
                    <div class="rectangle_50px_top_text">
                        <p id="top_1_team_name">{props.name}</p>
                        </div>
                  </div>
                </div>
                <div class="rectangle_50px_top_text"><p id="top_1_team_change">-</p></div>
              </div>
              <div class="top1_team_rectangle">
                <div class="row_left_gap20">
                {props.players.map((item) => 
                            <Link to="/player" style={{textDecoration: "none"}} >
                                <Player {...item} />
                            </Link>
                        )}
                
                  
                  <div class="player_top">
                    <div class="players_background">
                      <div class="crop"><img id="top_team_player1" src="img/players/Hitriy_Kazah.png" alt="Hitriy_Kazah" /></div>
                    </div>
                    <div class="nick">
                      <img id="top_team_player1_flag" src="img/flags/mini/Kosovo.svg" alt="Косово" />
                      <p>Hitriy_Kazah</p>
                    </div>
                  </div>
                  <div class="player_top">
                    <div class="players_background">
                      <div class="crop"><img id="top_team_player1" src="img/players/_SD_.png" alt="_SD_" /></div>
                    </div>
                    <div class="nick">
                      <img id="top_team_player1_flag" src="img/flags/mini/IsleOfMan.svg" alt="Остров Мэн" />
                      <p>_SD_</p>
                    </div>
                  </div>
                  <div class="player_top">
                    <div class="players_background">
                      <div class="crop"><img id="top_team_player1" src="img/players/rusttle.png" alt="rusttle" /></div>
                    </div>
                    <div class="nick">
                      <img id="top_team_player1_flag" src="img/flags/mini/Belize.svg" alt="Белиз" />
                      <p>rusttle</p>
                    </div>
                  </div>
                  <div class="player_top">
                    <div class="players_background">
                      <div class="crop"><img id="top_team_player1" src="img/players/ugly4.png" alt="ugly4" /></div>
                    </div>
                    <div class="nick">
                      <img id="top_team_player1_flag" src="img/flags/mini/Russia.svg" alt="Россия" />
                      <p>ugly4</p>
                    </div>
                  </div>
                </div>
                
                
                <Link to="/team">Профиль команды</Link>
              
              </div>
            </div>
    )
}

export default FirstTeam;