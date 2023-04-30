import React from "react";
import CurrentMatchMaker from "../components/MatchMacker/CurrentMatchMaker";
import OngoingMatchMaker from "../components/MatchMacker/OngoingMatchMaker";
import "./Matches.css";

function Matches() {

    const current_matches = [
        {series: "Zasada2", event: "Zasada Summer Cup", leftTeam: "Amfier", rightTeam: "Walhalla", leftUpperScore: 9, rightUpperScore: 16, leftSubScore: 0, rightSubScore: 0, tier: 3, map: "anb"},
        {series: "BLAST", event: "BLAST Summer Cup", leftTeam: "Amfier", rightTeam: "Walhalla", leftUpperScore: 16, rightUpperScore: 1, leftSubScore: 0, rightSubScore: 0, tier: 4, map: "anb"},
        {series: "Zasada2", event: "Zasada Summer Cup", leftTeam: "Amfier", rightTeam: "Walhalla", leftUpperScore: 15, rightUpperScore: 15, leftSubScore: 1, rightSubScore: 0, tier: 0, map: "bo3"},
        {series: "Zasada2", event: "Zasada Summer Cup", leftTeam: "Amfier", rightTeam: "Walhalla", leftUpperScore: 0, rightUpperScore: 0, leftSubScore: 2, rightSubScore: 2, tier: 5, map: "bo5"},
    ]

    const ongoing_matches = [
        {date: "15.03.2023", matches: [
            {time: "12:00", series: "Zasada2", event: "Zasada Summer Cup", leftTeam: "Amfier", rightTeam: "Walhalla", tier: 3, map: "anb"},
            {time: "12:45", series: "BLAST", event: "BLAST Summer Cup by Tamada", leftTeam: "Amfier", rightTeam: "Walhalla", tier: 5, map: "bo2"},
            {time: "13:45", series: "Zasada2", event: "Zasada Summer Cup", leftTeam: "Amfier", rightTeam: "Walhalla", tier: 3, map: "nuke"},
        ]},
        {date: "16.03.2023", matches: [
            {time: "09:45", series: "Zasada2", event: "Zasada Summer Cup", leftTeam: "Amfier", rightTeam: "Walhalla", tier: 3, map: "anb"},
            {time: "22:45", series: "BLAST", event: "BLAST Summer Cup by Tamada", leftTeam: "Amfier", rightTeam: "Walhalla", tier: 5, map: "bo2"},
            {time: "23:00", series: "Zasada2", event: "Zasada Summer Cup", leftTeam: "Amfier", rightTeam: "Walhalla", tier: 3, map: "nuke"},
        ]},
    ]

    return(
        <div>
            <div className="matches_header"><p>Текущие матчи</p></div>
            <div className="matches">
                <div className="col_center_gap10">
                    {current_matches.map((match) =>
                        <CurrentMatchMaker {...match}/>
                    )}
                </div>
            </div>

            <div className="matches_header"><p>Ближайшие матчи</p></div>
            <div className="matches">
                {ongoing_matches.map((day) =>
                    <OngoingMatchMaker {...day}/>
                )}
            </div>
        </div>
    );
}

export default Matches;