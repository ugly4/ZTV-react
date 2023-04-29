import React from "react";
import FlagName from "../components/FlagName/FlagName";
import Trophies from "../components/Trophies/Trophies";
import PlayerTabs from "../components/Tabs/PlayerTabs/PlayerTabs";
import "./Player.css"
import "../../src/Team/Team.css"

function Player(){
    //Короче, про отображение лого, фотки, ника и, соответственно, alt в фотках - 
    //всё это как-то из БД должно тянуться, может через пропсы
    const isAdmin = true;
    const nick = isAdmin ? "Tamada (Админ)" : "Tamada";
    const social = {
        items : [
            {id: 1, src: "img/social/VK.svg", alt: "VK", active: true, color: "white", link: "https://vk.com/tarnada"}, 
            {id: 2, src: "img/social/Steam.svg", alt: "Steam", active: true, color: "white", link: "https://steamcommunity.com/id/tamada4a"},
            {id: 3, src: "img/social/Discord.svg", alt: "Discord", active: false, color: "colored", link:""},
            {id: 4, src: "img/social/Faceit.svg", alt: "Faceit", active: true, color: "colored", link: "https://www.faceit.com/ru/players/VolceChat"}
        ]
    }

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

    const rosters = [
            {period: "Сентябрь 2020 - Настоящее время", team: "Amfier", teamLogo: "img/teams_logo/Amfier.png", id: 1, trophies:[
                {id: 313131, src: "img/trophies/cup2.svg", alt: "cup2"},
                {id: 313131, src: "img/trophies/cup2.svg", alt: "cup2"},
                {id: 313131, src: "img/trophies/cup2.svg", alt: "cup2"},
                {id: 313131, src: "img/trophies/cup2.svg", alt: "cup2"},
                {id: 313131, src: "img/trophies/cup2.svg", alt: "cup2"},
                {id: 313131, src: "img/trophies/cup2.svg", alt: "cup2"},
                {id: 313131, src: "img/trophies/cup2.svg", alt: "cup2"},
                {id: 414, src: "img/trophies/cup3.svg", alt: "cup3"}
            ]},
            {period: "Август 2020 - Сентябрь 2020", team: "Walhalla", teamLogo: "img/teams_logo/Walhalla.png", id: 2, trophies:[]},
            {period: "Февраль 2019 - Июнь 2019", team: "Amfier", teamLogo: "img/teams_logo/Amfier.png", id: 3, trophies:[
                {id: 313131, src: "img/trophies/cup2.svg", alt: "cup2"},
                {id: 313131, src: "img/trophies/cup2.svg", alt: "cup2"}]}
        ]

    const stats = {
        kills : 99999,
        deaths : 3131,
        kd : 31.93,
        kdd : 96868,
        hsp : 49.3,
        dpr : 60.2,
        maps : 6250,
        kpm : 16
    }

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

    return(
    <div>
        <div class="user_back">
            <div class="player_card_wrapper">
                <div class="player_team_logo"><img src="img/teams_logo/Amfier.png" alt="Amfier"/></div>
                <div class="player">
                    <div class="crop_player"><img src="img/players/Tamada.png" alt="Tamada"/></div>
                </div>
            </div>
            <div class="player_info">
                <div class="player_nick"><p>{nick}</p></div>
                <FlagName flagPath="img/flags/mini/Russia.svg" country="Россия" name="Кирилл Симовин" height='11px'/>
                <div class="devider_info">
                    <div class="devider_info_line">
                        <span>Возраст</span>
                        <p>Не указано</p>
                    </div>
                    <div class="devider_subline"></div>
                </div>
                <div class="devider_info">
                    <div class="devider_info_line">
                        <span>Текущая команда</span>
                        <div class="devider_team">
                            <div class="devider_team_logo"><img src="img/teams_logo/Amfier.png" alt="Amfier"/></div>
                            <p>ПУПА</p>
                        </div>
                    </div>
                    <div class="devider_subline"></div>
                </div>
                <div class="devider_info">
                    <div class="devider_info_line">
                        <span>Социальные сети</span>
                        <div class="social_media">
                            {social.items.map((item) => 
                            item.active === true ? <a href={item.link} target="_blank" rel="noopener noreferrer"><img key={item.id} className={item.color === "white" ? 'active_elem' : 'active_colored'} src={item.src} alt={item.alt}/></a> : 
                            <img key={item.id} className={item.color === "white" ? 'inactive_elem' : 'inactive_colored'} src={item.src} alt={item.alt}/>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="devider_line"></div>
        <Trophies items={trophies}/>
        <PlayerTabs 
        stat={stats} 
        rosters={rosters}
        matches_upcoming={matches_upcoming}
        matches_ended={matches_ended}
        ongoing_events={ongoing_events}
        ended_events={ended_events}
        lan_events={lan_events}
        online_events={online_events}
        />
    </div>
    );
}

export default Player;