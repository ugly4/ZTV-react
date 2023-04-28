import React from "react";
import FlagName from "../components/FlagName/FlagName";
import Map from "../components/Map/Map";
import Participant from "../components/Participant/Participant";
import PrizePlace from "../components/PrizePlace/PrizePlace";
import "./Event.css"

function Event(){
    const maps = ["Ancient", "Anubis", "Inferno", "Mirage", "Nuke", "Overpass", "Vertigo"]
    const registred = [
        {name: "Tamada", src: "img/players/Tamada.png", team: "Amfier", teamsrc: "img/teams_logo/Amfier.png", status: "await", type: "player"},
        {name: "rusttle", src: "img/players/rusttle.png", team: "", teamsrc: "", status: "accepted", type: "player"},
        {name: "Walhalla", src: "img/teams_logo/Walhalla.png", status: "kicked", type: "team"}
    ];
    const total = 16;

    const prizePlace = [
        {place: "1-2ое", prize: "10.000р"},
        {place: "3-4е", prize: "5.000р"},
        {place: "5-6ое", prize: "2.500р"},
        {place: "7-16ое", prize: "Сертификаты клуба"}
    ]

    return(
        <div>
            <div className="event_image_header">
                <div className="crop_header"><img src="img/event_logo/IEMHeader.png" alt="IEM"/></div>
            </div>
            <div className="event_header">
                <div className="info_wrapper">
                    <span>Дата</span>
                    <div className="event_date_wrapper"><p>03.12 - 05.12.2023</p></div>
                </div>

                <div className="info_wrapper">
                    <span>Приз</span>
                    <div className="event_prize_wrapper"><p>10.000.000</p></div>
                </div>

                <div className="info_wrapper">
                    <span>Взнос</span>
                    <div className="event_fee_wrapper"><p>1.000р</p></div>
                </div>

                <div className="info_wrapper">
                    <span>Команды</span>
                    <div className="event_team_wrapper"><p>0/16</p></div>
                </div>

                <div className="info_wrapper">
                    <span>Тип</span>
                    <div className="event_type_wrapper"><p>Online</p></div>
                </div>
                
                <div className="info_wrapper">
                    <span>Формат</span>
                    <div className="event_format_wrapper"><p>5х5</p></div>
                </div>

                <div className="info_wrapper">
                    <span>Локация</span>
                    <div className="event_location_wrapper"><FlagName flagPath="img/flags/mini/Russia.svg" country="Россия" name="Россия, Пугачёв" height='12px'/></div>
                </div>
            </div>
            <div className="space_wrapper">
                <div className="container_name">
                    <div className="event_col"><p>Команды</p></div>
                    <div className="participants_wrapper">
                        <Participant registred={registred} total={total}/>
                    </div>
                </div>

                <div className="container_name">
                    <div className="event_col"><p>Призовые места</p></div>
                    <div className="participants_wrapper">
                        <PrizePlace prize={prizePlace}/>
                        {/* <div className="item"><div className="tba_team"></div></div>
                        <div className="item"><div className="tba_team"></div></div>
                        <div className="item"><div className="tba_team"></div></div>
                        <div className="item"><div className="tba_team"></div></div>
                        <div className="item"><div className="tba_team"></div></div>
                        <div className="item"><div className="tba_team"></div></div>
                        <div className="item"><div className="tba_team"></div></div>
                        <div className="item"><div className="tba_team"></div></div> */}
                    </div>
                </div>

                <div className="event_info_bottom">
                    <div className="container_name">
                        <div className="event_col"><p>Пул карт</p></div>
                        <div className="maps">
                            {maps.map((map_name) => 
                                <Map map={map_name}/>
                            )}
                        </div>
                    </div>

                    <div className="container_name">
                    <div className="event_col"><p>Формат игр</p></div>
                        <div className="event_info">
                            <p>Ну тут описание турнира, всё такое, карты всякие и тд, и тп.
                            Ну тут описание турнира, всё такое, карты всякие и тд, и тп
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Event;