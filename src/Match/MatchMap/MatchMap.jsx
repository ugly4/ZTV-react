import React from "react";
import "./MatchMap.css"

function MatchMap(){
    return(
        <div class="map" id="map_1">
            <div class="map_img"></div>
            <div class="map_points">

                <div class="first_team" id="first_team_first_match">
                    <div class="container">
                        <div class="logo_first_team">
                        </div>
                        <div class="pick" id="fg_ft_pick"></div>
                    </div>
                        
                    <div class="container" >
                        <div class="name_first_team">
                            <p>AbuDabi</p>
                        </div>
                        <div class="score_first_team">
                            <p>10</p>
                        </div>
                    </div>
                        
                </div>

                <div class="score" id="fg_score">
                    (
                    <p id="fg_fh_ft">5</p>
                    :
                    <p id="fg_fh_st">10</p>
                    ;&nbsp;
                    <p id="fg_sh_ft">5</p>
                    :
                    <p id="fg_sh_st">6</p>
                    )
                </div>

                <div class="second_team">
                    <div class="container">
                        <div class="logo_second_team">
                        </div>
                        <div class="pick" id="fg_st_pick"></div>
                    </div>

                    <div class="container">
                        <div class="name_second_team">
                            <p>ПУПА</p>
                        </div>
                        <div class="score_second_team">
                            <p>16</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
    
}

export default MatchMap;