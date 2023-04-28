import React from "react";
import Match from "../Match/Match";
import {NavLink} from 'react-router-dom';
import "./Matches.css"

function Matches(){
    const matches_upcoming = [
        {event: "Zasada Gamer League 2023", type: "upcoming", place: "", matches: [
            {date: "14.01.2023", leftTeam: "Amfier", rightTeam: "Walhalla", leftScore: "-", rightScore: "-"},
            {date: "14.01.2023", leftTeam: "Amfier", rightTeam: "Walhalla", leftScore: "-", rightScore: "-"},
        ]},
        {event: "Zasada League", type: "upcoming", place: "", matches: [
            {date: "15.02.2023", leftTeam: "Amfier", rightTeam: "Walhalla", leftScore: "-", rightScore: "-"},
            {date: "16.03.2023", leftTeam: "Amfier", rightTeam: "Walhalla", leftScore: "-", rightScore: "-"},
        ]},
    ]

    const matches_ended = [
        {event: "Zasada Gamer League 2023", type: "upcoming", place: "", matches: [
            {date: "13.01.2023", leftTeam: "Amfier", rightTeam: "Walhalla", leftScore: 16, rightScore: 7},
            {date: "13.01.2023", leftTeam: "Amfier", rightTeam: "Walhalla", leftScore: 14, rightScore: 16},
        ]},
        {event: "Zasada League", type: "upcoming", place: "", matches: [
            {date: "05.02.2023", leftTeam: "Amfier", rightTeam: "Walhalla", leftScore: 19, rightScore: 17},
            {date: "06.03.2023", leftTeam: "Amfier", rightTeam: "Walhalla", leftScore: 22, rightScore: 20},
        ]},
    ]

    const isUpcoming = () =>{
        if(matches_upcoming.length > 0){
            return(
                <div>
                    <div class="time_header"><p>Ближайшие матчи</p></div>
                    <div class="match_col">
                        <p>Дата</p>
                        <p>Матч</p>
                    </div>
                    <div class="tournaments">
                        {matches_upcoming.map((ev) => <Match event={ev}/>)}
                    </div>
                </div>
            );
        }
    }

    const isPast = () =>{
        if(matches_ended.length > 0){
            return(
                <div>
                    <div class="time_header"><p>Прошедшие матчи</p></div>
                    <div class="match_col">
                        <p>Дата</p>
                        <p>Матч</p>
                    </div>
                    <div class="tournaments">
                        {matches_ended.map((ev) => <Match event={ev}/>)}
                    </div>
                </div>
            );
        }
    }

    return(
        <div class="tab_matches">
            {isUpcoming()}

            {isPast()}

            <div class="full_grey_button_gap15">
                <NavLink to="/team_results">
                  <input type="submit" id="loginsubmit" value="Все результаты команды"/>
                </NavLink>
            </div>
        </div>
    );
}

export default Matches;