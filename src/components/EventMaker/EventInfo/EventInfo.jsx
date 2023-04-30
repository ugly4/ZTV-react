import React from "react";
import Participant from '../../Participant/Participant';
import PrizePlace from '../../PrizePlace/PrizePlace';
import Map from '../../Map/Map';
import './EventInfo.css';

function EventInfo(props) {
    const urlFix = (url) => {
        if(url.startsWith("https://")){
            return url.replace("https://", "");
        }
        else if(url.startsWith("http://")){
            return url.replace("http://", "");
        }
        return url;
    }

    return(
        <div className="space_wrapper">
            <div className="container_name">
                <div className="event_col"><p>{props.part_header}</p></div>
                <div className="participants_wrapper">
                    <Participant part={props.part} total={props.total} status={props.status}/>
                </div>
            </div>

            <div className="container_name">
                <div className="event_col"><p>Призовые места</p></div>
                <div className="participants_wrapper">
                    <PrizePlace prize={props.prizePlace}/>
                </div>
            </div>

            <div className="event_info_bottom">
                <div className="container_name">
                    <div className="event_col"><p>Пул карт</p></div>
                    <div className="maps">
                        {props.maps.map((map_name) =>
                            <div className="map_wrapper">
                                <Map map={map_name}/>
                                <div className="map_name_wrapper"><p>{map_name}</p></div>
                            </div>   
                        )}
                    </div>
                </div>
                
                <div className="event_info_bottom_wrapper">
                    <div className="container_name">
                        <div className="event_col"><p>Формат игр</p></div>
                        <div className="event_info">
                            <p>Ну тут описание турнира, всё такое, карты всякие и тд, и тп.
                            Ну тут описание турнира, всё такое, карты всякие и тд, и тп. 
                            </p>
                        </div>
                    </div>
                    <div className="container_name">
                        <div className="event_col"><p>Архив с фотографиями</p></div>
                        <div className="event_info">
                            <a href={props.photoLink} target="_blank" rel="noopener noreferrer">{urlFix(props.photoLink)}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventInfo;