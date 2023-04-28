import React from "react";
import "./Match.css"

function Match(props){
    return(
        <div className="matches_space">
            <div class="match_header"> 
                <p>{props.event.event + (props.event.type === "upcoming" ? "" : "- ") + props.event.place}</p>
            </div>
            {props.event.matches.map((match) => 
                <div class="match_rect">
                    <div class="match_date_wrapper"><p>{match.date}</p></div>
                    <div class="match">
                    
                        <div class="match_team" style={{opacity: match.leftScore < match.rightScore ? 0.3 : 1}}>
                            <div class="left_team_tag"><p id="left_match_team">{match.leftTeam}</p></div>
                            <img src={"../img/teams_logo/" + match.leftTeam + ".png"} alt={match.leftTeam}/>
                        </div>
                
                        <div class="row_center_gap3">
                            <div class="left_team_score"><p style={{opacity: match.leftScore < match.rightScore ? 0.3 : 1}}>{match.leftScore}</p></div>
                            <p>:</p>
                            <div class="right_team_score"><p style={{opacity: match.rightScore < match.leftScore ? 0.3 : 1}}>{match.rightScore}</p></div>
                        </div>
                
                        <div class="match_team" style={{opacity: match.rightScore < match.leftScore ? 0.3 : 1}}>
                            <img src={"../img/teams_logo/" + match.rightTeam + ".png"} alt={match.rightTeam}/>
                            <div class="right_team_tag"><p id="right_match_team">{match.rightTeam}</p></div>
                        </div>
                    </div>
                    <div class="match_button_wrapper"><div class="button_match" id="match_button"><p>Матч</p></div></div>
                </div>
            )}
        </div>
    );
}

export default Match;