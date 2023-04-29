import React from "react";
import "./Match.css"
import MatchHeader from "./MatchHeader/MatchHeader";
import MatchMap from "./MatchMap/MatchMap"
import Streams from "./Streams/Streams"
import Description from "./Description/Description";
import Scoreboard from "./Scoreboard/Scoreboard"
import ScrollLog from "./ScrollLog/ScrollLog"
import Statistic from "./Statistic/Statistic"

function Match(props){
    const match = {
        MatchStatus: 1,
        NameFirst: "AbuDabi",
        NameSecond: "ПУПА",
        MatchDate: "31 сентября 2023",
        ScoreFirst: 2,
        ScoreSecond: 0,
        MatchTimeBegin: "09:59"
    }

    const stream = {
        name: "(название стрима)",
        viewers: 8948,
        flagPath: "img/flags/mini/Russia.svg",
        link: "https://www.twitch.tv/csgo_paragon"
    } 

    return(
        <div>
            {/* Хэдер матча со временем */}
            <MatchHeader {...match}/>

            <div class="match_info_upcoming">
                <div class="container">
                    {/* Описание матча */}
                    <Description></Description>
                    {/* Карты */}
                    <div class="container">
                        <MatchMap></MatchMap>
                        <MatchMap></MatchMap>
                        <MatchMap></MatchMap>
                    </div>
                </div>
                {/* В зависмости от того, какой тип матча, выводятся стримы */}
                <div class="container">
                    <p>{match.MatchStatus == 2 ? "Повтор" : "Просмотр"}</p>
                    <div class="match_info_upcoming_stream">
                        {match.MatchStatus == 0 ? <p>Трансляции отсутствуют</p> : null}
                        {match.MatchStatus == 1 ? <p>Zasada TV</p> : null}
                        {match.MatchStatus == 2 ? <p>Повторы отсутствуют</p> : null}
                    </div>
                    {match.MatchStatus == 1 && <Streams {...stream}/>}
                </div>
            </div>

            {/* В зависимости от статуса матча выводятся scoreboard, scrollLog, statistic */}
            {match.MatchStatus == 1 && 
                <div class="scoreboard_block">
                    <p>Таблица</p>
                    <Scoreboard></Scoreboard>
                </div>
            }

            {match.MatchStatus == 1 && 
                <div class="scoreboard_block">
                    <p>Игровые события</p>
                    <ScrollLog></ScrollLog>
                </div>
            }
                
            {match.MatchStatus == 2 && 
                <div class="scoreboard_block">
                    <p>Статистика матча</p>
                    <Statistic></Statistic>
                </div>
            }
        </div>   
    )
}
export default Match;