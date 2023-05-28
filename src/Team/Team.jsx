import React from "react";
import { useParams } from "react-router-dom";
import TeamTabs from "../components/Tabs/TeamTabs/TeamTabs";
import Trophies from "../components/Trophies/Trophies";
import { Link } from "react-router-dom";
import Player from "./Player/Player"
import "./Team.css"
import InfoContainer from "./InfoContainer/InfoContainer";
import Login from "../Login/Login";
import { useState } from "react";

function Team() {

  const params = useParams();

    const trophies = {
      trophies : [
            {id: 1, src: "img/trophies/cup1.svg", alt: "cup1"},
            {id: 2, src: "img/trophies/cup2.svg", alt: "cup2"},
            {id: 3, src: "img/trophies/cup3.svg", alt: "cup3"},
            {id: 4, src: "img/trophies/cup1.svg", alt: "cup1"},
            {id: 5, src: "img/trophies/cup2.svg", alt: "cup2"},
            {id: 6, src: "img/trophies/cup3.svg", alt: "cup3"},
            {id: 7, src: "img/trophies/cup1.svg", alt: "cup1"},
            {id: 8, src: "img/trophies/cup2.svg", alt: "cup2"},
            {id: 9, src: "img/trophies/cup3.svg", alt: "cup3"},
            {id: 10, src: "img/trophies/cup1.svg", alt: "cup1"},
            {id: 11, src: "img/trophies/cup2.svg", alt: "cup2"},
            {id: 12, src: "img/trophies/cup3.svg", alt: "cup3"},
            {id: 13, src: "img/trophies/cup1.svg", alt: "cup1"},
            {id: 14, src: "img/trophies/cup2.svg", alt: "cup2"},
            {id: 15, src: "img/trophies/cup3.svg", alt: "cup3"},
            {id: 16, src: "img/trophies/cup1.svg", alt: "cup1"},
            {id: 17, src: "img/trophies/cup2.svg", alt: "cup2"},
            {id: 18, src: "img/trophies/cup3.svg", alt: "cup3"},
            {id: 19, src: "img/trophies/cup1.svg", alt: "cup1"},
            {id: 20, src: "img/trophies/cup2.svg", alt: "cup2"},
            {id: 21, src: "img/trophies/cup3.svg", alt: "cup3"},
            {id: 22, src: "img/trophies/cup1.svg", alt: "cup1"},
            {id: 23, src: "img/trophies/cup2.svg", alt: "cup2"},
            {id: 24, src: "img/trophies/cup3.svg", alt: "cup3"}
        ]
    }

    const team = {
        logo: "img/teams_logo/NoLogo.svg",
        flagPath: "img/flags/mini/Russia.svg",
        country: "Россия",
        city: "Пугачёв",
        name: "Amfier",
        topPosition: 1
    }

    //________________________________________________________
    const players = [
      {nick: "Tamada", photo: "img/players/Tamada.png", flagPath: "img/flags/mini/Spain.svg", country: "Испания"},
      {nick: "_SD_", photo: "img/players/_SD_.png", flagPath: "img/flags/mini/IsleOfMan.svg", country: "Остров Мэн"},
      {nick: "Hitriy_Kazah", photo: "img/players/Hitriy_Kazah.png", flagPath: "img/flags/mini/Kosovo.svg", country: "Косово"},
      {nick: "rusttle", photo: "img/players/rusttle.png", flagPath: "img/flags/mini/Belize.svg", country: "Белиз"},
      {nick: "ugly4", photo: "img/players/ugly4.png", flagPath: "img/flags/mini/Russia.svg", country: "Россия"}
    ]
    let [teamPlayers, updateTeamPlayers] = useState(players);
    //--------------------------------------------------------
    const ex_players = [
      {nick: "Tamada", photo: "img/players/Tamada.png", flagPath: "img/flags/mini/Spain.svg", country: "Испания"},
      {nick: "_SD_", photo: "img/players/_SD_.png", flagPath: "img/flags/mini/IsleOfMan.svg", country: "Остров Мэн"},
      {nick: "Hitriy_Kazah", photo: "img/players/Hitriy_Kazah.png", flagPath: "img/flags/mini/Kosovo.svg", country: "Косово"},
      {nick: "rusttle", photo: "img/players/rusttle.png", flagPath: "img/flags/mini/Belize.svg", country: "Белиз"},
      {nick: "_SD_", photo: "img/players/_SD_.png", flagPath: "img/flags/mini/IsleOfMan.svg", country: "Остров Мэн"},
      {nick: "Hitriy_Kazah", photo: "img/players/Hitriy_Kazah.png", flagPath: "img/flags/mini/Kosovo.svg", country: "Косово"},
      {nick: "rusttle", photo: "img/players/rusttle.png", flagPath: "img/flags/mini/Belize.svg", country: "Белиз"},
      {nick: "Tamada", photo: "img/players/Tamada.png", flagPath: "img/flags/mini/Spain.svg", country: "Испания"},
      {nick: "_SD_", photo: "img/players/_SD_.png", flagPath: "img/flags/mini/IsleOfMan.svg", country: "Остров Мэн"},
      {nick: "Hitriy_Kazah", photo: "img/players/Hitriy_Kazah.png", flagPath: "img/flags/mini/Kosovo.svg", country: "Косово"},
      {nick: "rusttle", photo: "img/players/rusttle.png", flagPath: "img/flags/mini/Belize.svg", country: "Белиз"},
      {nick: "_SD_", photo: "img/players/_SD_.png", flagPath: "img/flags/mini/IsleOfMan.svg", country: "Остров Мэн"},
      {nick: "Hitriy_Kazah", photo: "img/players/Hitriy_Kazah.png", flagPath: "img/flags/mini/Kosovo.svg", country: "Косово"},
      {nick: "rusttle", photo: "img/players/rusttle.png", flagPath: "img/flags/mini/Belize.svg", country: "Белиз"},
      {nick: "ugly4", photo: "img/players/ugly4.png", flagPath: "img/flags/mini/Russia.svg", country: "Россия"}
    ]
    let [ex_teamPlayers,updateEx_teamPlayers] = useState(ex_players);

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

    const ongoing_events = [
      {name: "Zasada Gamer League Major Cup", date: "07.04.2023 - 07.04.2024", logo: "img/event_logo/BLAST.svg", link: "/event", participants:[
        {src: "img/teams_logo/AbuDabi.svg", name: "AbuDabi"},
        {src: "img/teams_logo/Walhalla.png", name: "Walhalla"},
        {src: "img/teams_logo/NoLogo.svg", name: "G2"},
        {src: "img/players/Hitriy_Kazah.png", name: "Hitriy_Kazah"},
        {src: "img/players/rusttle.png", name: "rusttle"},
      ]},
      {name: "Zasada Gamer League Major Cup", date: "07.04.2023 - 07.04.2024", logo: "img/event_logo/BLAST.svg", link: "/event",  participants:[
        {src: "img/teams_logo/AbuDabi.svg", name: "AbuDabi"},
        {src: "img/teams_logo/Walhalla.png", name: "Walhalla"},
        {src: "img/teams_logo/NoLogo.svg", name: "G2"},
        {src: "img/players/Hitriy_Kazah.png", name: "Hitriy_Kazah"},
        {src: "img/players/_SD_.png", name: "_SD_"},
      ]}
    ]

    const ended_events = [
      {name: "Zasada Gamer League Major Cup", date: "07.04.2023 - 07.04.2024", logo: "img/event_logo/Zasada2.svg", link: "/event", place: "1-3е"},
      {name: "Zasada Gamer League Major Cup", date: "07.04.2023 - 07.04.2024", logo: "img/event_logo/BLAST.svg", link: "/event", place: "2ое"},
      {name: "Zasada Gamer League Major Cup", date: "07.04.2023 - 07.04.2024", logo: "img/event_logo/BLAST.svg", link: "/event", place: "3е"},
      {name: "Zasada Gamer League Major Cup", date: "07.04.2023 - 07.04.2024", logo: "img/event_logo/BLAST.svg", link: "/event", place: "3-4ое"},
      {name: "Zasada Gamer League Major Cup", date: "07.04.2023 - 07.04.2024", logo: "img/event_logo/Zasada2.svg", link: "/event", place: "2-4ое"},
    ]

    const lan_events = [
      {name: "Zasada Gamer League Major Cup", date: "07.04.2023 - 07.04.2024", logo: "img/event_logo/Zasada2.svg", link: "/event", place: "1-3е"},
      {name: "Zasada Gamer League Major Cup", date: "07.04.2023 - 07.04.2024", logo: "img/event_logo/BLAST.svg", link: "/event", place: "2ое"},
      {name: "Zasada Gamer League Major Cup", date: "07.04.2023 - 07.04.2024", logo: "img/event_logo/BLAST.svg", link: "/event", place: "3е"},
      {name: "Zasada Gamer League Major Cup", date: "07.04.2023 - 07.04.2024", logo: "img/event_logo/BLAST.svg", link: "/event", place: "3-4ое"},
      {name: "Zasada Gamer League Major Cup", date: "07.04.2023 - 07.04.2024", logo: "img/event_logo/Zasada2.svg", link: "/event", place: "2-4ое"}
    ]

    const online_events = [
      {name: "Zasada Gamer League Major Cup", date: "07.04.2023 - 07.04.2024", logo: "img/event_logo/Zasada2.svg", link: "/event", place: "1-3е"},
      {name: "Zasada Gamer League Major Cup", date: "07.04.2023 - 07.04.2024", logo: "img/event_logo/BLAST.svg", link: "/event", place: "2ое"},
      {name: "Zasada Gamer League Major Cup", date: "07.04.2023 - 07.04.2024", logo: "img/event_logo/BLAST.svg", link: "/event", place: "3е"},
      {name: "Zasada Gamer League Major Cup", date: "07.04.2023 - 07.04.2024", logo: "img/event_logo/BLAST.svg", link: "/event", place: "3-4ое"},
      {name: "Zasada Gamer League Major Cup", date: "07.04.2023 - 07.04.2024", logo: "img/event_logo/BLAST.svg", link: "/event", place: "3-4ое"},
      {name: "Zasada Gamer League Major Cup", date: "07.04.2023 - 07.04.2024", logo: "img/event_logo/Zasada2.svg", link: "/event", place: "2-4ое"}
    ]

    const description = "Самая командная команда из всех командных команд, которые только могут быть. Да, мы лучшие и мы этого не скрываем, да. А всё почему? Потому что мы ПУПА - ПУзатые Пупсы в Автозаке.";

    const type = "admin";
    const isCapAdmin = type === "admin" ? true : type === "captain" ? true : false;
    const [leaveWindowActive, setLeaveWindowActive] = useState(false);
    const handleClick = () => {
      setLeaveWindowActive(!leaveWindowActive);
  };

    const [mouseOutCard, setMouseOutCard] = useState(true); //Для ховера игрока
    const [mouseOnCard, setMouseOnCard] = useState(false); //Для ховера игрока

    return(
        <div >
          <div>
            <div className="team_rectangle">
              {teamPlayers.map((player) => 
                !isCapAdmin ?
                <Link to={"/player/" + player.nick} style={{textDecoration: "none"}} target="_blank" rel="noopener noreferrer" >
                    <Player {...player}/>
                </Link> :
                <Player 
                player={player}
                players={teamPlayers}
                updatePlayers={updateTeamPlayers}
                ex_players={ex_teamPlayers}
                updateExPlayers={updateEx_teamPlayers}
                />
                
                )}
            </div>

            <div className="devider_line"></div>

            <InfoContainer {...team} isCapAdmin={isCapAdmin}/>

            <div className="devider_line"></div>

            <Trophies items={trophies}/>

        </div>
          
        <TeamTabs
        isCapAdmin={isCapAdmin}
        description={description}
        players={teamPlayers} 
        matches_upcoming={matches_upcoming} 
        matches_ended={matches_ended}
        ongoing_events={ongoing_events}
        ended_events={ended_events}
        lan_events={lan_events}
        online_events={online_events}
        ex_players={ex_teamPlayers}
        team={params.id}
        />

        {isCapAdmin && 
        <div className="leave_team" onClick={() => setLeaveWindowActive(true)}>
          <p>Покинуть команду</p>
        </div>}
        
        <Login active={leaveWindowActive} setActive={setLeaveWindowActive}>
          <div className="header_splash_window">
            <div className="logo_splash_window"></div>
          </div>
          <div className="info_text">
            <p>Вы уверены, что хотите покинуть команду {team.name}?</p>
          </div>
          <div className="small_buttons_wrapper">
                <div className="small_dark_button">
                    <input type="submit" value="Нет" onClick={() => leaveWindowActive ? setLeaveWindowActive(!leaveWindowActive) : null}/>
                </div>
                <div className="small_grey_button">
                    <input type="submit" value="Да" onClick={() => leaveWindowActive ? setLeaveWindowActive(!leaveWindowActive) : null}/>
                </div>
            </div>
          
        </Login>
    </div>
    )
    
};

export default Team;
