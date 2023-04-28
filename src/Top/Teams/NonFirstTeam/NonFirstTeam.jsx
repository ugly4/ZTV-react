import React from "react";
import "./NonFirstTeam.css"

function NonFirstTeam(props){
    return(
        <div class="rectangle_50px_top">
                <div class="row_center_6">
                  <div class="rectangle_50px_top_text"><p>#{props.topPosition}</p></div>
                  <div class="row_center_gap3">
                    <img src={props.logo} id="top_2_team_logo" />
                    <div class="col_right_gap3">
                      <div class="rectangle_50px_top_text"><p id="top_2_team_name">{props.name}</p></div>
                      <div class="row_center_6">
                        {props.players.map((item) => 
                            <div class="rectangle_50px_top_nick">
                                <p id="top_2_team_player1">
                                    {item.nick}
                                </p>
                            </div>
                        )}
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div class="rectangle_50px_top_text"><p id="top_2_team_change" style={props.changedPosition>0 ? {color: "green"} : {color: "red"}}>{props.changedPosition>0 ? "+" : null}{props.changedPosition}</p></div>
              </div>
    )
}

export default NonFirstTeam;