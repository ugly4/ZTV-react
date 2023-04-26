import React from "react";
import "./Matches.css"

function Matches(){
    return(
        <div class="tab_matches">
            <div class="time_header"><p>Ближайшие матчи</p></div>
            <div class="match_col">
                <p>Дата</p>
                <p>Матч</p>
            </div>
            <div class="tournaments">
                <div class="matches_space">
                    <div class="match_header"> 
                        <p>Zasada Gamer League 2023</p>
                    </div>
                    <div class="match_rect">
                        <div class="match_date_wrapper"><p>14.01.2023</p></div>
                        <div class="match">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Matches;