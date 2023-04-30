import React from "react";
import { Link } from "react-router-dom";
import "./MatchHeader.css"

function MatchHeader(props){

    
    const [counter, setCounter] = React.useState((props.MatchDate.getTime() - new Date()) / 1000);
    React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
      }, [counter]);

    function monthWord(monthNum){
        switch(monthNum){
            case 0: return "января"; break;
            case 1: return "февраля"; break;
            case 2: return "марта"; break;
            case 3: return "апреля"; break;
            case 4: return "мая"; break;
            case 5: return "июня"; break;
            case 6: return "июля"; break;
            case 7: return "августа"; break;
            case 8: return "сентября"; break;
            case 9: return "октября"; break;
            case 10: return "ноября"; break;
            case 11: return "декабря"; break;

        }
            
   }

    return(
        <div class="header_match">
            
            <div class="container_time_match">
                <div class="container_time_match_time">
                    <a>
                        {props.MatchDate.getHours()< 10 ? 
                            "0" + props.MatchDate.getHours() :
                            props.MatchDate.getHours()}
                        :
                        {props.MatchDate.getMinutes()< 10 ? 
                            "0"+props.MatchDate.getMinutes() :
                            props.MatchDate.getMinutes()}
                    </a>
                </div>
                <div class="container_time_match_date">
                    <a>{props.MatchDate.getDate()} {monthWord(props.MatchDate.getMonth())} {props.MatchDate.getFullYear()}</a>
                </div>
                <div class="container_time_match_cup">
                    <Link to="/event">Zasada Super Duper Ultra mega Cup</Link>
                </div>
                <div class="container_time_match_live">
                    {props.MatchStatus == 0 ? <a>{counter < 3600 ? 0 : parseInt(counter/3600)} час. {counter < 60 ? 0 : parseInt(counter/60%60)} мин. {parseInt(counter%60)} сек.</a> : null}
                    {props.MatchStatus == 1 ? <a>LIVE</a> : null}
                    {props.MatchStatus == 2 ? <a>Матч окончен</a> : null}
                    
                </div>
            </div>
            <div class="flag_1st">
                <Link to="/team"> 
                    <img src={props.LogoFirst} class="logo_1st" />
                </Link>
                <div class="name_team_1st">
                    <Link to="/team"> {props.NameFirst} </Link>  
                </div>
                {(props.MatchStatus == 1) || (props.MatchStatus == 2) ? <a id="points_1st" style={props.ScoreSecond < props.ScoreFirst ?{color: "green"}:{color: "red"}}>{props.ScoreFirst}</a> : null}
                
            </div>
            <div class="flag_2st">
                <img src={props.LogoSecond} class="logo_2st" />
                <div class="name_team_2st">
                  <a href="">{props.NameSecond}</a>
                </div>
                {(props.MatchStatus == 1) || (props.MatchStatus == 2) ? <a id="points_2st" style={props.ScoreSecond < props.ScoreFirst ?{color: "red"}:{color: "green"}}>{props.ScoreSecond}</a> : null}
            </div>
        </div>
    )
}

export default MatchHeader;