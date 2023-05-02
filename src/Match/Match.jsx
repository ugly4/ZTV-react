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
        MatchStatus: 2,
        NameFirst: "AbuDabi",
        LogoFirst: "/img/teams_logo/AbuDabi.svg",
        SideFirst: "ct",
        ScoreFirst: 0,

        NameSecond: "ПУПА",
        LogoSecond: "/img/teams_logo/pupa.svg",
        SideSecond: "t",
        ScoreSecond: 2,
        MatchDate: new Date(2023, 4, 5, 8, 0, 0),
        maps: [
            {mapName: "Overpass", scoreFirst: 10, scoreSecond: 16, firstRound:[5, 10], secondRound: [5, 6]},
            {mapName: "Anubis", scoreFirst: 5, scoreSecond: 10, firstRound:[5, 10], secondRound: [null, null]},
            {mapName: "Nuke", scoreFirst: null, scoreSecond: null, firstRound:[null,null], secondRound: [null, null]}
        ]
        
    }
    
    const stream = {
        name: "(название стрима)",
        viewers: 8948,
        flagPath: "img/flags/mini/Russia.svg",
        link: "https://www.twitch.tv/csgo_paragon",
        country: "Россия"
    } 

    return(
        <div>
            {/* Хэдер матча со временем */}
            <MatchHeader {...match}/>

            <div class="match_info_upcoming">
                <div class="container">
                    {/* Описание матча */}
                    <Description {...match}></Description>
                    {/* Карты */}
                    <div class="container">
                        <MatchMap props={match} map={match.maps[0]}></MatchMap>
                        <MatchMap props={match} map={match.maps[1]}></MatchMap>
                        <MatchMap props={match} map={match.maps[2]}></MatchMap>
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
                    <Scoreboard props={match} map={match.maps[0]}></Scoreboard>
                </div>
            }

            {match.MatchStatus == 1 && 
                <div class="scroll_logs_block">
                    <p>Игровые события</p>
                    <ScrollLog props={match} map={match.maps[0]}></ScrollLog>
                </div>
            }
                
            {match.MatchStatus == 2 && 
                <div class="match_statistic_block">
                    <p>Статистика матча</p>
                    <Statistic props={match} map={match.maps[0]}></Statistic>
                </div>
            }
        </div>   
    )
}
export default Match;