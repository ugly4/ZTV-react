import React from "react";
import "./Matches.css"
function Matches(){
    return(
        <div id="Matches" class="tabcontent_matches">
             
              <div class="head_header"><p>Ближайшие матчи</p></div>
              <div class="match_col">
                <p>Дата</p>
                <p>Матч</p>
              </div>
              <div class="tournaments" id="feature_tournaments">
                <div class="col_center_gap10">
                  <div class="match_header"> 
                    <p>Zasada Gamer League 2023</p>
                  </div>
                  
                  <div class="match_rect">
                    <div class="match_date_wrapper"><p id="match_date">14.01.2023</p></div>
                    <div class="match" id="match_id">
                      
                      <div class="match_team">
                        <div class="left_team_tag"><p id="left_match_team">Amfier</p></div>
                        <img src="img/teams_logo/Amfier.png" id="left_match_team_logo"/>
                      </div>
                      
                      <div class="row_center_gap3">
                        <div class="left_team_score"><p>-</p></div>
                        <p>:</p>
                        <div class="right_team_score"><p>-</p></div>
                      </div>
                     
                      <div class="match_team">
                        <img src="img/teams_logo/Walhalla.png" id="right_match_team_logo"/>
                        <div class="right_team_tag"><p id="right_match_team">Walhalla</p></div>
                      </div>
                    </div>
                    <div class="match_button_wrapper"><div class="button_match" id="match_button"><p>Матч</p></div></div>
                  </div>
                  <div class="match_rect">
                    <div class="match_date_wrapper"><p id="match_date">14.01.2023</p></div>
                    <div class="match" id="match_id">
                      
                      <div class="match_team">
                        <div class="left_team_tag"><p id="left_match_team">AbuDabi</p></div>
                        <img src="img/teams_logo/AbuDabi.svg" id="left_match_team_logo"/>
                      </div>
                      
                      <div class="row_center_gap3">
                        <div class="left_team_score"><p>-</p></div>
                        <p>:</p>
                        <div class="right_team_score"><p>-</p></div>
                      </div>
                      
                      <div class="match_team">
                        <img src="img/teams_logo/NoLogo.svg" id="right_match_team_logo"/>
                        <div class="right_team_tag"><p id="right_match_team">G2</p></div>
                      </div>
                    </div>
                    <div class="match_button_wrapper"><div class="button_match" id="match_button"><p>Матч</p></div></div>
                  </div>
                </div>
              </div>

              
              <div class="head_header"><p>Прошедшие матчи</p></div>
              <div class="match_col">
                <p>Дата</p>
                <p>Матч</p>
              </div>
              <div class="tournaments" id="past_tournaments">
                <div class="col_center_gap10">
                  <div class="match_header"> 
                    <p>BLAST Pro League</p>
                    <p>-</p>
                    <p>2ое место</p>
                  </div>
                  
                  <div class="match_rect">
                    <div class="match_date_wrapper"><p id="match_date">14.01.2023</p></div>
                    <div class="match" id="match_id">
                      
                      <div class="match_team">
                        <div class="left_team_tag"><p id="left_match_team">Amfier</p></div>
                        <img src="img/teams_logo/Amfier.png" id="left_match_team_logo"/>
                      </div>
                      
                      <div class="row_center_gap3">
                        <div class="left_team_score"><p>16</p></div>
                        <p>:</p>
                        <div class="right_team_score"><p style={{opacity:30 + "%"}}>10</p></div>
                      </div>
                      
                      <div class="match_team" style={{opacity:30 + "%"}}>
                        <img src="img/teams_logo/Walhalla.png" id="right_match_team_logo"/>
                        <div class="right_team_tag"><p id="right_match_team">Walhalla</p></div>
                      </div>
                    </div>
                    <div class="match_button_wrapper"><div class="button_match" id="match_button"><p>Матч</p></div></div>
                  </div>
                  <div class="match_rect">
                    <div class="match_date_wrapper"><p id="match_date">14.01.2023</p></div>
                    <div class="match" id="match_id">
                      
                      <div class="match_team">
                        <div class="left_team_tag"><p id="left_match_team">Amfier</p></div>
                        <img src="img/teams_logo/Amfier.png" id="left_match_team_logo"/>
                      </div>
                      
                      <div class="row_center_gap3">
                        <div class="left_team_score"><p>16</p></div>
                        <p>:</p>
                        <div class="right_team_score"><p style={{opacity:30 + "%"}}>10</p></div>
                      </div>
                      
                      <div class="match_team" style={{opacity:30 + "%"}}>
                        <img src="img/teams_logo/Walhalla.png" id="right_match_team_logo"/>
                        <div class="right_team_tag"><p id="right_match_team">Walhalla</p></div>
                      </div>
                    </div>
                    <div class="match_button_wrapper"><div class="button_match" id="match_button"><p>Матч</p></div></div>
                  </div>
                </div>
                <div class="col_center_gap10">
                  <div class="match_header"> 
                    <p>Zasasda Community</p>
                    <p>-</p>
                    <p>1ое место</p>
                  </div>
                  
                  <div class="match_rect">
                    <div class="match_date_wrapper"><p id="match_date">14.01.2023</p></div>
                    <div class="match" id="match_id">
                      
                      <div class="match_team">
                        <div class="left_team_tag"><p id="left_match_team">Amfier</p></div>
                        <img src="img/teams_logo/Amfier.png" id="left_match_team_logo"/>
                      </div>
                      
                      <div class="row_center_gap3">
                        <div class="left_team_score"><p>16</p></div>
                        <p>:</p>
                        <div class="right_team_score"><p style={{opacity:30 + "%"}}>10</p></div>
                      </div>
                      
                      <div class="match_team" style={{opacity:30 + "%"}}>
                        <img src="img/teams_logo/Walhalla.png" id="right_match_team_logo"/>
                        <div class="right_team_tag"><p id="right_match_team">Walhalla</p></div>
                      </div>
                    </div>
                    <div class="match_button_wrapper"><div class="button_match" id="match_button"><p>Матч</p></div></div>
                  </div>
                  <div class="match_rect">
                    <div class="match_date_wrapper"><p id="match_date">14.01.2023</p></div>
                    <div class="match" id="match_id">
                      
                      <div class="match_team">
                        <div class="left_team_tag"><p id="left_match_team">Amfier</p></div>
                        <img src="img/teams_logo/Amfier.png" id="left_match_team_logo"/>
                      </div>
                      
                      <div class="row_center_gap3">
                        <div class="left_team_score"><p>16</p></div>
                        <p>:</p>
                        <div class="right_team_score"><p style={{opacity:30 + "%"}}>10</p></div>
                      </div>
                      
                      <div class="match_team" style={{opacity:30 + "%"}}>
                        <img src="img/teams_logo/Walhalla.png" id="right_match_team_logo"/>
                        <div class="right_team_tag"><p id="right_match_team">Walhalla</p></div>
                      </div>
                    </div>
                    <div class="match_button_wrapper"><div class="button_match" id="match_button"><p>Матч</p></div></div>
                  </div>
                </div>
              </div>

              <div class="full_grey_button_gap15">
                <a href="team_results.html">
                  <input type="submit" id="loginsubmit" value="Все результаты команды"/>
                </a>
              </div>
            </div>
    );
}

export default Matches;