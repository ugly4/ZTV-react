import React from "react";
import { useParams } from "react-router-dom";
import ResultMaker from "../components/ResultMaker/ResultMaker";
import "../Results/Results.css";

function PlayerResults() {

    const results = [
        {date: "15.03.2023", matches: [
            {series: "Zasada2", event: "Zasada Summer Cup Major", eventSrc: "img/event_logo/Zasada2.svg", leftTeam: "Walhalla", rightTeam: "Amfier", rightTeamSrc: "img/teams_logo/Amfier.png", leftTeamSrc: "img/teams_logo/Walhalla.png", leftScore: 16, rightScore: 8, tier: 5, map: "nuke", tierSrc: "img/Top_star.svg"},
            {series: "Zasada2", event: "Zasada Summer Cup", eventSrc: "img/event_logo/Zasada2.svg", leftTeam: "Amfier", rightTeam: "Walhalla", rightTeamSrc: "img/teams_logo/Walhalla.png", leftTeamSrc: "img/teams_logo/Amfier.png", leftScore: 9, rightScore: 16, tier: 0, map: "trn", tierSrc: "img/Top_star.svg"},
            {series: "Zasada2", event: "Zasada Cup", eventSrc: "img/event_logo/Zasada2.svg", leftTeam: "Amfier", rightTeam: "Walhalla", rightTeamSrc: "img/teams_logo/Walhalla.png", leftTeamSrc: "img/teams_logo/Amfier.png", leftScore: 22, rightScore: 20, tier: 4, map: "cbble", tierSrc: "img/Top_star.svg"}
        ]},
        {date: "17.03.2023", matches: [
            {series: "Zasada2", event: "Zasada Summer Cup Major", eventSrc: "img/event_logo/Zasada2.svg", leftTeam: "Walhalla", rightTeam: "Amfier", rightTeamSrc: "img/teams_logo/Amfier.png", leftTeamSrc: "img/teams_logo/Walhalla.png", leftScore: 16, rightScore: 8, tier: 5, map: "nuke", tierSrc: "img/Top_star.svg"},
            {series: "Zasada2", event: "Zasada Summer Cup", eventSrc: "img/event_logo/Zasada2.svg", leftTeam: "Amfier", rightTeam: "Walhalla", rightTeamSrc: "img/teams_logo/Walhalla.png", leftTeamSrc: "img/teams_logo/Amfier.png", leftScore: 9, rightScore: 16, tier: 0, map: "trn", tierSrc: "img/Top_star.svg"},
            {series: "Zasada2", event: "Zasada Cup", eventSrc: "img/event_logo/Zasada2.svg", leftTeam: "Amfier", rightTeam: "Walhalla", rightTeamSrc: "img/teams_logo/Walhalla.png", leftTeamSrc: "img/teams_logo/Amfier.png", leftScore: 22, rightScore: 20, tier: 4, map: "cbble", tierSrc: "img/Top_star.svg"}
        ]}
    ]

    const params = useParams();

    return(
        <div>
            <div className="results_header"><p>{"Результаты игрока " + params.id}</p></div>
            <div className="results">
                {results.map((day) =>
                    <ResultMaker day={day}/>
                )}
            </div>
        </div>
    );
}

export default PlayerResults;