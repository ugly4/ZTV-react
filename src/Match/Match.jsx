import React from "react";
import { useState } from "react";
import MatchHeader from "./MatchHeader/MatchHeader";
import MatchMap from "./MatchMap/MatchMap"
import Streams from "./Streams/Streams"
import Description from "./Description/Description";
import Scoreboard from "./Scoreboard/Scoreboard"
import ScrollLog from "./ScrollLog/ScrollLog"
import Statistic from "./Statistic/Statistic"
import "./Match.css"


function Match(props){
    const isAdmin = true;
    const [isStart, setIsStart] = useState(true);
    const [teamsActive, setTeamsActive] = useState([false, false, false, false, false]); // состояния команд - выбрана ли команда(чтоб блокировать ее)

    const match = {
        MatchStatus: 1,
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
        ],
        event: "Zasada Super Duper Ultra mega Cup",
        format: "Best of 3",
        type: "Lan",
        description: "* Тут какое то описание, уточнения или тп. "
    }
    const isCap = true;
    const stream = {
        name: "(название стрима)",
        viewers: 8948,
        flagPath: "img/flags/mini/Russia.svg",
        link: "https://www.twitch.tv/csgo_paragon",
        country: "Россия"
    } 
    const [ipMatch, setActiveIpMatch] = useState(false);
    const teams = [
        {name: "ПУПА", logo: "img/teams_logo/pupa.svg"}, 
        {name: "Walhalla", logo: "img/teams_logo/Walhalla.png"}, 
        {name: "G2", logo: "img/teams_logo/NoLogo.svg"}, 
        {name: "AbuDabi", logo: "img/teams_logo/AbuDabi.svg"}, 
        {name: "Amfier", logo: "img/teams_logo/Amfier.png"}
    ];
    const indexOf = (value) =>{
        for(let i = 0; i < teams.length; ++i){
          if(value === teams[i].name){
            return i;
          }
        }
    }

    const setSelectedTeam = () =>{
        let temp = [...teamsActive];
        let id = indexOf(match.NameFirst);
        temp[id] = true;

        id = indexOf(match.NameSecond);
        temp[id] = true;

        setTeamsActive(temp);

        setIsStart(false);
    }
    return(
        <div>
            {/* Хэдер матча со временем */}
            {isStart ? setSelectedTeam() : null}
            <MatchHeader {...match} isAdmin={isAdmin} teams={teams} teamsActive={teamsActive}/>

            <div class="match_info_upcoming">
                <div class="container">
                    {/* Описание матча */}
                    <Description {...match} isAdmin={isAdmin}/>
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
                    { (isCap&& match.MatchStatus != 2) && 
                    <div class="ip_match">
                        {!ipMatch ? 
                        <p class="ip_hidden">IP скрыт</p> : 
                        <p class="ip_open" style={{color: "white", fontFamily: "var(--text-medium-lcg)"}}>321313131</p> 
                        }
                        <div class="ip_block_images">
                            <img src="../img/Eye.svg" style={{cursor: "pointer"}} onClick={() => ipMatch ? setActiveIpMatch(!ipMatch) : setActiveIpMatch(true)}></img>
                            <img src="../img/Copy.svg" style={{cursor: "pointer"}} onClick={() =>[navigator.clipboard.writeText("321313131")]}></img>
                            <a href="">
                                <img src="../img/twitch_link.svg"></img>
                            </a>
                            
                        </div>
                    </div>
                    }
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