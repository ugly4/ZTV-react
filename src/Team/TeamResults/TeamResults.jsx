import React from "react";
import ResultMaker from "../../components/ResultMaker/ResultMaker";
import "../../Results/Results.css";

function TeamResults() {

    const results = [
        {date: "15.03.2023", matches: [
            {series: "Zasada2", event: "Zasada Summer Cup Major", leftTeam: "Walhalla", rightTeam: "Amfier", leftScore: 16, rightScore: 8, tier: 5, map: "nuke"},
            {series: "Zasada2", event: "Zasada Summer Cup", leftTeam: "Amfier", rightTeam: "Walhalla", leftScore: 9, rightScore: 16, tier: 0, map: "trn"},
            {series: "Zasada2", event: "Zasada Cup", leftTeam: "Amfier", rightTeam: "Walhalla", leftScore: 22, rightScore: 20, tier: 4, map: "cbble"}
        ]},
        {date: "17.03.2023", matches: [
            {series: "Zasada2", event: "Zasada Summer Cup Major", leftTeam: "Amfier", rightTeam: "Walhalla", leftScore: 16, rightScore: 8, tier: 1, map: "dust 2"},
            {series: "Zasada2", event: "Zasada Summer Cup", leftTeam: "Amfier", rightTeam: "Walhalla", leftScore: 9, rightScore: 16, tier: 3, map: "anb"},
            {series: "BLAST", event: "BLAST Cup", leftTeam: "Amfier", rightTeam: "Walhalla", leftScore: 2, rightScore: 0, tier: 4, map: "bo3"}
        ]}
    ]

    return(
        <div>
            <div class="results_header"><p>Результаты</p></div>
            <div className="results">
                {results.map((day) =>
                    <ResultMaker day={day}/>
                )}
            </div>
        </div>
    );
}

export default TeamResults;