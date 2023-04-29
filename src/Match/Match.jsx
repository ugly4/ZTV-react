import React from "react";
import "./Match.css"
import MatchHeader from "./MatchHeader/MatchHeader";
import Maps from "./Maps/Maps"
import Streams from "./Streams/Streams"

function Match(props){
    const match = {
        MatchStatus: 0,
        NameFirst: "AbuDabi",
        NameSecond: "ПУПА",
        MatchDate: "31 сентября 2023",
        ScoreFirst: 2,
        ScoreSecond: 0,
        MatchTimeBegin: "09:59"
    }
   
    return(
        <div>
            <MatchHeader {...match}/>
            <Maps> </Maps>
            <Streams></Streams>
        </div>   
    )
}
export default Match;