import React from "react";
import "./TeamRow.css"

function TeamRow({team}){
    function teamColor(side){
        if (side == "ct")
            return "rgba(28, 188, 255, 0.7)";
        else return "rgba(244, 78, 28, 0.7)";
    }
    return(
        <div class="team_row" style={{background: teamColor(team.side)}}>
            <div class="team_row_name">
                <img src={team.logo} style={{width: "23px", height: "23px", marginTop: "1px"}}></img>
                <p>{team.name}</p>
            </div>
            <div class="states">
                <img src="/img/scrollLog/accessories/Cart.svg"></img>
                <img src="/img/scrollLog/accessories/HP.svg"></img>
                <img src="/img/scrollLog/accessories/Assaultsuit.svg"></img>
                <div class="money">$</div>
            </div>
            <div class="kda_block">
                <div class="kda">
                    <p>У</p>
                    <p>П</p>
                    <p>С</p>
                </div>
                <div class="cyp">
                    <p>СУР</p>
                </div>
            </div>
        </div>
    )
}

export default TeamRow;