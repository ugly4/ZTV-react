import React from "react";
import "./Scoreboard.css"

function Scoreboard({props, map}){
    return(
        <div class="scoreboard" style={{backgroundImage: "url(img/maps/scoreboard/"+ map.mapName +".png)"}}>
            <div class="scoreboard_score_block">
                <div class="scoreboard_score">
                    <div class="t_score">15</div>
                    <p>:</p>
                    <div class="ct_score">10</div>
                </div>
                <div class="round">
                    Round: 26 - overpass
                </div>
                <div style={{display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            padding: "0px",
                            gap: "10px",
                            position: "absolute",
                            width: "630px",
                            height: "416px",
                            left: "9px",
                            top: "49px",
                            }}>
                    <div class="team_block">
                        <div class="team_row">
                            <div class="team_row_name">
                                <img src="/img/teams_logo/AbuDabi.svg" style={{width: "23px", height: "23px", marginTop: "1px"}}></img>
                                <p>AbuDabi</p>
                            </div>
                            <div class="states">

                            </div>
                            <div class="kda">

                            </div>
                        </div>
                    </div>
                </div>
                
            </div> 
        </div>
    )
}

export default Scoreboard;