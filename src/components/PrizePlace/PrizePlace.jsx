import React from "react";
import "./PrizePlace.css"

function PrizePlace(props) {
    return(
        <div className="item">
            {props.prize.map((prizePlace) =>
            <div className="prize_place">
                <div className="prize_wrapper">
                    <p>{prizePlace.place}</p>
                    <span>{prizePlace.prize}</span>
                </div>
            </div>
            )}
        </div>
    );
}

export default PrizePlace;