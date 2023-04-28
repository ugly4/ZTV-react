import React from "react";
import "./Top.css"
import "../../src/auto-layout.css"
import {Link} from "react-router-dom"
import NonFirstTeam from "./Teams/NonFirstTeam/NonFirstTeam";
import FirstTeam from "./Teams/FirstTeam/FirstTeam";

function Top(){
  const abuDabi={
    topPosition: 1,
    logo: "img/teams_logo/AbuDabi.svg",
    name: "AbuDabi",
    players: [
      {nick: "Tamada", photo: "img/players/Tamada.png", country: "Испания", flagPath: "img/flags/mini/Spain.svg"}
    ]
  }
  
  const pupa={
    logo: "img/teams_logo/pupa.svg",
    name: "ПУПА",
    topPosition: 2,
    players: [
      {nick: "игрок1"},
      {nick: "игрок2"},
      {nick: "игрок3"},
      {nick: "игрок4"},
      {nick: "игрок5"}
    ],
    changedPosition: 1
  }
    return(
      <div class="top_teams">
          <p id="top_date">Топ команд на 01.04.2023</p>
          <div class="col_center_gap10">
            
            <FirstTeam {...abuDabi}/>
            
            <Link to="/team" style={{textDecoration: "none"}}>
              <NonFirstTeam {...pupa}/>
            </Link>
            
            <Link to="/team" style={{textDecoration: "none"}}>
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
            </Link>

            <Link to="/team" style={{textDecoration: "none"}}>
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
            </Link>

            <Link to="/team" style={{textDecoration: "none"}}>
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
            </Link>
            
            
            
            
          </div>
      </div>
    )
    
};

export default Top;