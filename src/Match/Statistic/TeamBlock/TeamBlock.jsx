import React from "react";
import './TeamBlock.css'
import PlayerRow from "./PlayerRow/PlayerRow";
import TeamRow from "./TeamRow/TeamRow";

function TeamBlock({team,map}){
    return(
        <div class="statistic_team_block">
            <TeamRow team={team}/>
            {/* {team.players.map((item) => 
                <PlayerRow props={item} team={team}/>
            )} */}
            <PlayerRow props={team.players[0]} team={team} />
        </div>
    )
}

export default TeamBlock;