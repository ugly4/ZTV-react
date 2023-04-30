import React from "react";
import "./Description.css"

function Description(props){
    return(
    <div>
        <p>Карты</p>
        <div class="match_info_upcoming_maps_desc">
            <p>Best of 3(Lan)<br/><br/>* Тут какое то описание, уточнения или тп. </p>
        </div>
        {props.MatchStatus == 0 ? null : 
            <div class="maps_news">
                <p>1. Команда ПУПА убирает Mirage</p>
                <p>2. Команда AbuDabi убирает Vertigo</p>
                <p>3. Команда AbuDabi выбирает Overpass</p>
                <p>4. Команда ПУПА выбирает Anubis</p>
                <p>5. Команда AbuDabi убирает Inferno</p>
                <p>6. Команда ПУПА убирает Ancient</p>
                <p>7. Остаётся Nuke</p>
            </div>
        }
        
    </div>
    )
}

export default Description;