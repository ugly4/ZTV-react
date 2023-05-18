import React from "react";
import Map from "../../components/Map/Map";
import "./MatchMap.css"

function MatchMap({props, map}){
  
    return(
        <div class={props.MatchStatus == 0 ? "map_upcoming" : "map"} style={(map.scoreFirst == null)&&(map.scoreSecond == null)&&(props.MatchStatus != 0) ? {opacity: "0.3"}: null} >
            {props.MatchStatus == 0 ? 
              <div style={{height: "30px", objectPosition: "center", position: "relative"}}>
                <Map map={"TBA"}/> 
                <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                  <p style={{margin: "0", fontFamily: "var(--text-regular-lcg)"}}>TBA</p>
                </div>
              </div>
              
              : 
              <div style={{height: "30px", objectPosition: "center", position: "relative"}}>
                <Map map={map.mapName}/>
                <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                  <p style={{margin: "0", fontFamily: "var(--text-regular-lcg)"}}>{map.mapName}</p>
                </div>
              </div>
            }
            {props.MatchStatus == 0 ? null :
                
                    <div class="map_points">
                      <div class="first_team" style={!((map.scoreFirst == null)&&(map.scoreSecond == null)) ? map.scoreSecond > map.scoreFirst ? {opacity: "0.3"} : null : null}>
                        <div class="container">
                          <img src={props.LogoFirst} class="logo_team" />
                          <img src="/img/pick.svg"class="pick"/>
                        </div>
                        
                        <div class="container" >
                          <div class="name_first_team">
                            <p>{props.NameFirst}</p>
                          </div>
                          <div class="score_first_team">
                            <p style={!((map.scoreFirst == null)&&(map.scoreSecond == null)) ? map.scoreSecond > map.scoreFirst ?  {color: "red"} : {color: "green"} : {color: "white"}}>
                              {map.scoreFirst == null ? "-" : map.scoreFirst}
                            </p>
                          </div>
                        </div>
                        
                      </div>

                      <div class="score" id="fg_score" style={(map.scoreFirst == null)&&(map.scoreSecond == null) ? {opacity: "0"} : null}>
                        (
                          <p >{map.firstRound[0] == null ? "-": map.firstRound[0]}</p>
                        :
                          <p >{map.firstRound[1] == null ? "-": map.firstRound[1]}</p>
                        ;&nbsp;
                          <p >{map.secondRound[0] == null ? "-": map.secondRound[0]}</p>
                        :
                          <p >{map.secondRound[1] == null ? "-": map.secondRound[1]}</p>
                        )
                      </div>

                      <div class="second_team" style={!((map.scoreFirst == null)&&(map.scoreSecond == null)) ? map.scoreSecond > map.scoreFirst ? null : {opacity: "0.3"} : null}>
                        <div class="container">
                          <img src={props.LogoSecond} class="logo_team" />
                          <div class="pick"></div>
                        </div>

                        <div class="container">
                          <div class="name_second_team">
                            <p>{props.NameSecond}</p>
                          </div>
                          <div class="score_second_team">
                            <p style={!((map.scoreFirst == null)&&(map.scoreSecond == null)) ? map.scoreSecond > map.scoreFirst ? {color: "green"} : {color: "red"} : {color: "white"}}>
                              {map.scoreSecond == null ? "-" : map.scoreSecond}
                            </p>
                          </div>
                        </div>

                        </div>
                      </div>
                  
            }
                    
        </div>
                  
    )
    
}

export default MatchMap;