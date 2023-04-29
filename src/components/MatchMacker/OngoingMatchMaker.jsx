import React from "react";
import "../../Matches/Matches.css";
import "../Tabs/Match/Match.css"
import "../ResultMaker/ResultMaker.css"

function OngoingMatchMaker(props){
    const setTier = (tier) =>{
        let content = [];
        for(let i = 0; i < 5; ++i){
            if (i < tier){
                content.push(
                    <img src="img/Top_star.svg" alt="star"/>
                );
            }
            else{
                content.push(
                    <img src="img/Top_star.svg" style={{opacity: 0.3}} alt="faded_star"/>
                );
            }
        }
        return content;
    }

    return(
        <div className="col_center_gap10">
            <div className="results_date"><p>Матчи {props.date}</p></div>
            {props.matches.map((match) =>
                <div className="match_frame">
                    <div className="status_match_wrapper">
                        <div className="ongoing"><p>{match.time}</p></div>
                        <div className="matches_frame">
                            <div className="match_team">
                                <div class="left_team_tag"><p>{match.leftTeam}</p></div>
                                <img src={"img/teams_logo/" + match.leftTeam + ".png"}/>
                            </div>
                            <div className="match_score">
                            </div>
                            <div className="match_team">
                                <img src={"img/teams_logo/" + match.rightTeam + ".png"}/>
                                <div className="right_team_tag"><p>{match.rightTeam}</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="row_center_gap3">
                        <div className="tournament_logo">
                            <img src={"img/event_logo/" + match.series + ".svg"} alt={match.series}/>
                        </div>
                        <div className="event">
                            <p>{match.event}</p>
                        </div>
                    </div>
                    <div className="match_tier">
                        <div className="row_center_gap3">
                            {setTier(match.tier)}
                        </div>
                        <p>{match.map}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default OngoingMatchMaker;