import React from "react";
import AttendedEvents from "../components/AttendedEvents/AttendedEvents";
import "../components/AttendedEvents/AttendedEvents.css";

function PlayerEvents() {
    const events = [
        {event: "Zasada Gamer League", logo: "img/event_logo/BLAST.svg", date: "07.03.2023 - 12.04.2023", place: "14-16", team: "Amfier", teamSrc: "img/teams_logo/Amfier.png"},
        {event: "Zasada Gamer League", logo: "img/event_logo/BLAST.svg", date: "07.03.2023 - 12.04.2023", place: "1-16", team: "Amfier", teamSrc: "img/teams_logo/Amfier.png"},
        {event: "Zasada Gamer League", logo: "img/event_logo/BLAST.svg", date: "07.03.2023 - 12.04.2023", place: "2", team: "Amfier", teamSrc: "img/teams_logo/Amfier.png"},
        {event: "Zasada Gamer League", logo: "img/event_logo/Zasada2.svg", date: "07.03.2023 - 12.04.2023", place: "3", team: "Amfier", teamSrc: "img/teams_logo/Amfier.png"},
        {event: "Zasada Gamer League", logo: "img/event_logo/BLAST.svg", date: "07.03.2023 - 12.04.2023", place: "1-2", team: "Amfier", teamSrc: "img/teams_logo/Amfier.png"},
        {event: "Zasada Gamer League", logo: "img/event_logo/BLAST.svg", date: "07.03.2023 - 12.04.2023", place: "14-16", team: "Amfier", teamSrc: "img/teams_logo/Amfier.png"},
    ]

    return(
        <div>
            <div className="results_header"><p>Посещённые турниры</p></div>
            <div className="events_col">
                <div className="events_col_date"><p>Место</p></div>
                <div className="events_col_event"><p>Турнир</p></div>
                <div className="events_col_team"><p>Команда</p></div>
            </div>
            <div className="events">
                {events.map((ev) =>
                    <AttendedEvents event={ev}/>
                )}
            </div>
        </div>
    );
}

export default PlayerEvents;