import React from "react";
import "../Tabs/Match/Match.css";
import "./ResultMaker.css";

function ResultMaker(props) {

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
            <div className="results_date"><p>{"Результаты за " + props.day.date}</p></div>
            {props.day.matches.map((match) =>
                <div className="match_rect_full">
                    <div className="match">

                        <div className="match_team" style={{opacity: match.leftScore < match.rightScore ? 0.3 : 1}}>
                            <div className="left_team_tag"><p>{match.leftTeam}</p></div>
                            <img src={"img/teams_logo/" + match.leftTeam + ".png"} alt={match.leftTeam}/>
                        </div>

                        <div className="row_center_gap3">
                            <div className="left_team_score"><p style={{opacity: match.leftScore < match.rightScore ? 0.3 : 1, color: match.rightScore < match.leftScore ? "green" : "white"}}>{match.leftScore}</p></div>
                            <p>:</p>
                            <div className="right_team_score"><p style={{opacity: match.rightScore < match.leftScore ? 0.3 : 1, color: match.leftScore < match.rightScore ? "green" : "white"}}>{match.rightScore}</p></div>
                        </div>

                        <div className="match_team" style={{opacity: match.rightScore < match.leftScore ? 0.3 : 1}}>
                            <img src={"img/teams_logo/" + match.rightTeam + ".png"} alt={match.rightTeam}/>
                            <div className="right_team_tag"><p id="right_match_team">{match.rightTeam}</p></div>
                        </div>
                    </div>
                    <div className="row_center_gap3">
                        <div className="tournament_logo"><img src={"img/event_logo/" + match.series + ".svg"} alt={match.series}/></div>
                        <div className="tournament_name"><p>{match.event}</p></div>
                    </div>
                    <div className="top_tier">
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

export default ResultMaker;
