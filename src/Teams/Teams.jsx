import React from "react";
import "./Teams.css"
import "../../src/auto-layout.css"

const Teams = () => (
    <div class="top_teams">
          <p id="top_date">Топ команд на 01.04.2023</p>
          <div class="col_center_gap10">
            <div>
              <div class="rectangle_50px_top">
                <div class="row_center_6">
                  <div class="rectangle_50px_top_text"><p>#1</p></div>
                  <div class="row_center_gap3">
                    <img src="img/teams_logo/AbuDabi.svg" id="top_1_team_logo" />
                    <div class="rectangle_50px_top_text"><p id="top_1_team_name">AbuDabi</p></div>
                  </div>
                </div>
                <div class="rectangle_50px_top_text"><p id="top_1_team_change">-</p></div>
              </div>
              <div class="top1_team_rectangle">
                <div class="row_left_gap20">
                  <div class="player_top">
                    <div class="players_background">
                      <div class="crop"><img id="top_team_player1" src="img/players/Tamada.png" alt="Tamada" /></div>
                    </div>
                    <div class="nick">
                      <img id="top_team_player1_flag" src="img/flags/mini/Spain.svg" alt="Испания" />
                      <p>Tamada</p>
                    </div>
                  </div>
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
                <p>Профиль команды</p>
              </div>
            </div>
            <div class="rectangle_50px_top">
              <div class="row_center_6">
                <div class="rectangle_50px_top_text"><p>#2</p></div>
                <div class="row_center_gap3">
                  <img src="img/teams_logo/pupa.svg" id="top_2_team_logo" />
                  <div class="col_right_gap3">
                    <div class="rectangle_50px_top_text"><p id="top_2_team_name">ПУПА</p></div>
                    <div class="row_center_6">
                      <div class="rectangle_50px_top_nick"><p id="top_2_team_player1">игрок1</p></div>
                      <div class="rectangle_50px_top_nick"><p id="top_2_team_player2">игрок2</p></div>
                      <div class="rectangle_50px_top_nick"><p id="top_2_team_player3">игрок3</p></div>
                      <div class="rectangle_50px_top_nick"><p id="top_2_team_player4">игрок4</p></div>
                      <div class="rectangle_50px_top_nick"><p id="top_2_team_player5">игрок5</p></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="rectangle_50px_top_text"><p id="top_2_team_change" style={{color: "green"}}>+1</p></div>
            </div>
            <div class="rectangle_50px_top">
              <div class="row_center_6">
                <div class="rectangle_50px_top_text"><p>#3</p></div>
                <div class="row_center_gap3">
                  <img src="img/teams_logo/Walhalla.png" id="top_3_team_logo" />
                  <div class="col_right_gap3">
                    <div class="rectangle_50px_top_text"><p id="top_3_team_name">Walhalla</p></div>
                    <div class="row_center_6">
                      <div class="rectangle_50px_top_nick"><p id="top_3_team_player1">игрок1</p></div>
                      <div class="rectangle_50px_top_nick"><p id="top_3_team_player2">игрок2</p></div>
                      <div class="rectangle_50px_top_nick"><p id="top_3_team_player3">игрок3</p></div>
                      <div class="rectangle_50px_top_nick"><p id="top_3_team_player4">игрок4</p></div>
                      <div class="rectangle_50px_top_nick"><p id="top_3_team_player5">игрок5</p></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="rectangle_50px_top_text"><p id="top_3_team_change" style={{color: "red"}}>-1</p></div>
            </div>
            <div class="rectangle_50px_top">
              <div class="row_center_6">
                <div class="rectangle_50px_top_text"><p>#4</p></div>
                <div class="row_center_gap3">
                  <img src="img/teams_logo/Amfier.png" id="top_4_team_logo" />
                  <div class="col_right_gap3">
                    <div class="rectangle_50px_top_text"><p id="top_4_team_name">Amfier</p></div>
                    <div class="row_center_6">
                      <div class="rectangle_50px_top_nick"><p id="top_4_team_player1">игрок1</p></div>
                      <div class="rectangle_50px_top_nick"><p id="top_4_team_player2">игрок2</p></div>
                      <div class="rectangle_50px_top_nick"><p id="top_4_team_player3">игрок3</p></div>
                      <div class="rectangle_50px_top_nick"><p id="top_4_team_player4">игрок4</p></div>
                      <div class="rectangle_50px_top_nick"><p id="top_4_team_player5">игрок5</p></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="rectangle_50px_top_text"><p id="top_4_team_change">-</p></div>
            </div>
            <div class="rectangle_50px_top">
              <div class="row_center_6">
                <div class="rectangle_50px_top_text"><p>#5</p></div>
                <div class="row_center_gap3">
                  <img src="img/teams_logo/NoLogo.svg" id="top_5_team_logo" />
                  <div class="col_right_gap3">
                    <div class="rectangle_50px_top_text"><p id="top_5_team_name">G2</p></div>
                    <div class="row_center_6">
                      <div class="rectangle_50px_top_nick"><p id="top_5_team_player1">игрок1</p></div>
                      <div class="rectangle_50px_top_nick"><p id="top_5_team_player2">игрок2</p></div>
                      <div class="rectangle_50px_top_nick"><p id="top_5_team_player3">игрок3</p></div>
                      <div class="rectangle_50px_top_nick"><p id="top_5_team_player4">игрок4</p></div>
                      <div class="rectangle_50px_top_nick"><p id="top_5_team_player5">игрок5</p></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="rectangle_50px_top_text"><p id="top_5_team_change">-</p></div>
            </div>
          </div>
        </div>
);

export default Teams;