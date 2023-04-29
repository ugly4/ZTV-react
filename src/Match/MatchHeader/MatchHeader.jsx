import React from "react";
import { Link } from "react-router-dom";
import "./MatchHeader.css"

function MatchHeader(props){

    
    const [counter, setCounter] = React.useState(3612);
    React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
      }, [counter]);

    

    return(
        <div class="header_match">
            
            <div class="container_time_match">
                <div class="container_time_match_time">
                    <a>{props.MatchTimeBegin}</a>
                </div>
                <div class="container_time_match_date">
                    <a>{props.MatchDate}</a>
                </div>
                <div class="container_time_match_cup">
                    <Link to="/event">Zasada Super Duper Ultra mega Cup</Link>
                </div>
                <div class="container_time_match_live">
                    {props.MatchStatus == 0 ? <a>{counter < 3600 ? 0 : parseInt(counter/3600%24)} час. {counter < 60 ? 0 : parseInt(counter/60%60)} мин. {counter%60} сек.</a> : null}
                    {props.MatchStatus == 1 ? <a>LIVE</a> : null}
                    {props.MatchStatus == 2 ? <a>Матч окончен</a> : null}
                    
                </div>
            </div>
            <div class="flag_1st">
                <div class="logo_1st"> 
                </div>
                <div class="name_team_1st">
                    <a href="">{props.NameFirst}</a>
                </div>
                {(props.MatchStatus == 1) || (props.MatchStatus == 2) ? <a id="points_1st" style={props.ScoreSecond < props.ScoreFirst ?{color: "green"}:{color: "red"}}>{props.ScoreFirst}</a> : null}
                
            </div>
            <div class="flag_2st">
                <div class="logo_2st">  
                </div>
                <div class="name_team_2st">
                  <a href="">{props.NameSecond}</a>
                </div>
                {(props.MatchStatus == 1) || (props.MatchStatus == 2) ? <a id="points_2st" style={props.ScoreSecond < props.ScoreFirst ?{color: "red"}:{color: "green"}}>{props.ScoreSecond}</a> : null}
            </div>
        </div>
    )
}

export default MatchHeader;