import React from "react";
import "./Participant.css"

function Participant(props) {

    // тут мы отрисовываем в конец пустые места
    const tba_participant = () => {
        let content = [];
        let size = props.total - props.registred.length;
        for(let i = 0; i < size; ++i){
            content.push(
                <div className="tba_participant">
                    <div className="tba_wrapper">
                        <div className="participant_team">
                            <img src="img/teams_logo/TBAParticipant.svg" alt="Неизвестно"/>
                        </div>
                        <p>Неизвестно</p> 
                    </div>
                </div>
            );
        }
        return content;
    }

    // определяем тип участника (команда или игрок)
    const participant_type = (participant) =>{
        let src = participant.src;
        let name = participant.name;
        if(participant.type === "team"){
            return(
                <div className="participant_wrapper">
                    <div className="participant_team">
                        <img src={src} alt={name}/>
                    </div>      
                    <p>{name}</p>  
                </div>
            );
        }
        else{
            return(
                <div className="participant_wrapper">
                    {participant.team === "" ? <></> : 
                    <div className="participant_player_logo"><img src={participant.teamsrc} alt={participant.team}/></div>
                    }
                    <div className="participant_player">
                        <div className="crop_participant_player"><img src={src} alt={name} /></div>
                    </div>
                    <p>{name}</p>
                </div>
            );
        }
    }


    return(
        <div className="item">
            {props.registred.map((participant) =>
                <div className={participant.status === "accepted" ? "accepted_participant" : participant.status === "await" ? "await_participant" : participant.status === "kicked" ? "kicked_participant" : "tba_participant"}>
                    {participant_type(participant)}
                </div>
            )}
            {tba_participant()}
        </div>
    );
}

export default Participant;