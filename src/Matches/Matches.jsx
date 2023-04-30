import React from "react";
import CurrentMatchMaker from "../components/MatchMacker/CurrentMatchMaker";
import OngoingMatchMaker from "../components/MatchMacker/OngoingMatchMaker";
import "./Matches.css";

function Matches() {

    const current_matches = [
        {series: "Zasada2", event: "Zasada Summer Cup", eventSrc: "img/event_logo/Zasada2.svg", leftTeam: "Amfier", leftTeamSrc: "img/teams_logo/Amfier.png", rightTeam: "Walhalla", rightTeamSrc: "img/teams_logo/Walhalla.png", leftUpperScore: 9, rightUpperScore: 16, leftSubScore: 0, rightSubScore: 0, tier: 3, tierSrc: "img/Top_star.svg", map: "anb"},
        {series: "BLAST", event: "BLAST Summer Cup", eventSrc: "img/event_logo/BLAST.svg", leftTeam: "Amfier", leftTeamSrc: "img/teams_logo/Amfier.png", rightTeam: "Walhalla", rightTeamSrc: "img/teams_logo/Walhalla.png", leftUpperScore: 16, rightUpperScore: 1, leftSubScore: 0, rightSubScore: 0, tier: 4, tierSrc: "img/Top_star.svg", map: "anb"},
        {series: "Zasada2", event: "Zasada Summer Cup", eventSrc: "img/event_logo/Zasada2.svg", leftTeam: "Amfier", leftTeamSrc: "img/teams_logo/Amfier.png", rightTeam: "Walhalla", rightTeamSrc: "img/teams_logo/Walhalla.png", leftUpperScore: 15, rightUpperScore: 15, leftSubScore: 1, rightSubScore: 0, tier: 0, tierSrc: "img/Top_star.svg", map: "bo3"},
        {series: "Zasada2", event: "Zasada Summer Cup", eventSrc: "img/event_logo/Zasada2.svg", leftTeam: "Amfier", leftTeamSrc: "img/teams_logo/Amfier.png", rightTeam: "Walhalla", rightTeamSrc: "img/teams_logo/Walhalla.png", leftUpperScore: 0, rightUpperScore: 0, leftSubScore: 2, rightSubScore: 2, tier: 5, tierSrc: "img/Top_star.svg", map: "bo5"},
    ]

    const ongoing_matches = [
        {date: "15.03.2023", matches: [
            {time: "12:00", series: "Zasada2", event: "Zasada Summer Cup", eventSrc: "img/event_logo/Zasada2.svg", leftTeam: "Amfier", leftTeamSrc: "img/teams_logo/Amfier.png", rightTeam: "Walhalla", rightTeamSrc: "img/teams_logo/Walhalla.png", tier: 3, tierSrc: "img/Top_star.svg", map: "anb"},
            {time: "12:45", series: "BLAST", event: "BLAST Summer Cup by Tamada", eventSrc: "img/event_logo/BLAST.svg", leftTeam: "Amfier", leftTeamSrc: "img/teams_logo/Amfier.png", rightTeam: "Walhalla", rightTeamSrc: "img/teams_logo/Walhalla.png", tier: 5, tierSrc: "img/Top_star.svg", map: "bo2"},
            {time: "13:45", series: "Zasada2", event: "Zasada Summer Cup", eventSrc: "img/event_logo/Zasada2.svg", leftTeam: "Amfier", leftTeamSrc: "img/teams_logo/Amfier.png", rightTeam: "Walhalla", rightTeamSrc: "img/teams_logo/Walhalla.png", tier: 3, tierSrc: "img/Top_star.svg", map: "nuke"},
        ]},
        {date: "16.03.2023", matches: [
            {time: "09:45", series: "Zasada2", event: "Zasada Summer Cup", eventSrc: "img/event_logo/Zasada2.svg", leftTeam: "Amfier", leftTeamSrc: "img/teams_logo/Amfier.png", rightTeam: "Walhalla", rightTeamSrc: "img/teams_logo/Walhalla.png", tier: 3, tierSrc: "img/Top_star.svg", map: "anb"},
            {time: "22:45", series: "BLAST", event: "BLAST Summer Cup by Tamada", eventSrc: "img/event_logo/BLAST.svg", leftTeam: "Amfier", leftTeamSrc: "img/teams_logo/Amfier.png", rightTeam: "Walhalla", rightTeamSrc: "img/teams_logo/Walhalla.png", tier: 5, tierSrc: "img/Top_star.svg", map: "bo2"},
            {time: "23:00", series: "Zasada2", event: "Zasada Summer Cup", eventSrc: "img/event_logo/Zasada2.svg", leftTeam: "Amfier", leftTeamSrc: "img/teams_logo/Amfier.png", rightTeam: "Walhalla", rightTeamSrc: "img/teams_logo/Walhalla.png", tier: 3, tierSrc: "img/Top_star.svg", map: "nuke"},
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