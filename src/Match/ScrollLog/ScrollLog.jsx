import React from "react";
import "./ScrollLog.css"
import Log from "./Log/Log";

function ScrollLog({props, map}){
    const tamada = {
        nick: "Tamada",
        side: "t"
    }
    const frost = {
        nick: "Frost",
        side: "ct"
    }
    const rusttle = {
        nick: "rusttle",
        side: "t"
    }
    const sd = {
        nick: "_SD_",
        side: "t"
    }
    const ugly4 = {
        nick: "ugly4",
        side: "t"
    }
    const xunder = {
        nick: "X_UndeR",
        side: "ct"
    }
    const simple = {
        nick: "s1mple",
        side: "t"
    }
    function colorNick(nick){
        if (nick.side == "ct")
            return "var(--ct-color)";
        else 
            return "var(--t-color)";
    }
    function weaponImg(weapon){
        return "/img/scrollLog/weapons/"+weapon+".svg";        
    }
    function addInfoKill(info){
        return "/img/scrollLog/howKilled/"+info+".svg";
    }
    function thingsImg(thing){
        return "/img/scrollLog/accessories/"+thing+".svg";        
    }
    return( 
        <div className="scroll_logs" style={{backgroundImage: "url(../img/maps/scoreboard/"+ map.mapName +".png)"}}>
            <div className="logs_container">
                <Log type={"login"}>
                    <div className="event_text" style={{color: colorNick(tamada)}}>{tamada.nick}</div><p>зашёл на сервер</p>
                </Log>
                <Log type={"logout"}>
                    <div className="event_text" style={{color: colorNick(tamada)}}>{tamada.nick}</div><p>вышел с сервера</p>
                </Log>
                <Log type={"t_win"}>
                    <p>Раунд завершен - Победитель:</p>
                    <div className="event_text" style={{color: colorNick(tamada)}}>T</div>
                    <p>(</p>
                    <div className="event_text" style={{color: colorNick(tamada)}}>10</div>
                    <p>-</p>
                    <div className="event_text" style={{color: colorNick(frost)}}>5</div>
                    <p>) -</p>
                    <div className="event_text" style={{color: colorNick(tamada)}}>Взорвана бомба</div>
                </Log>
                <Log type={"kill"}>
                    <div className="event_text" style={{color: colorNick(frost)}}>{frost.nick}</div>
                    <img src={weaponImg("Nova")}/>
                    <img src={addInfoKill("Headshot")}/>
                    <div className="event_text" style={{color: colorNick(sd)}}>{sd.nick}</div>
                </Log>
                <Log type={"kill"}>
                    <div className="event_text" style={{color: colorNick(frost)}}>{frost.nick}</div>
                    <img src={addInfoKill("Inferno")}/>
                    <div className="event_text" style={{color: colorNick(rusttle)}}>{rusttle.nick}</div>
                </Log>
                <Log type={"kill"}>
                    <div className="event_text" style={{color: colorNick(frost)}}>{frost.nick}</div>
                    <img src={weaponImg("SSG-08")}/>
                    <img src={addInfoKill("Noscope")}/>
                    <div className="event_text" style={{color: colorNick(ugly4)}}>{ugly4.nick}</div>
                </Log>
                <Log type={"kill"}>
                    <div className="event_text" style={{color: colorNick(frost)}}>{frost.nick}</div>
                    <img src={weaponImg("SSG-08")}/>
                    <img src={addInfoKill("Smoke")}/>
                    <div className="event_text" style={{color: colorNick(tamada)}}>{tamada.nick}</div>
                </Log>
                <Log type={"bomb_planted"}>
                    <div className="event_text" style={{color: colorNick(ugly4)}}>{ugly4.nick}</div>
                    <img src={thingsImg("Bomb")}/>
                    <p>поставил бомбу на А (</p>
                    <div className="event_text" style={{color: colorNick(tamada)}}>4</div>
                    <p>в</p>       
                    <div className="event_text" style={{color: colorNick(frost)}}>4</div>
                    <p>)</p>
                    
                </Log>
                <Log type={"kill"}>
                    <div className="event_text" style={{color: colorNick(frost)}}>{frost.nick}</div>
                    <img src={weaponImg("USP-S")}/>
                    <img src={addInfoKill("Headshot")}/>
                    <div className="event_text" style={{color: colorNick(simple)}}>{simple.nick}</div>
                </Log>
                <Log type={"kill"}>
                    <div className="event_text" style={{color: colorNick(tamada)}}>{tamada.nick}</div>
                    <p>+</p>
                    <div className="event_text" style={{color: colorNick(ugly4)}}>{ugly4.nick}</div>
                    <p>+</p>
                    <img src={addInfoKill("FlashAssist")}/>
                    <div className="event_text" style={{color: colorNick(rusttle)}}>{rusttle.nick}</div>
                    <img src={weaponImg("AWP")}/>
                    <img src={addInfoKill("Noscope")}/>
                    <img src={addInfoKill("Penetrated")}/>
                    <img src={addInfoKill("Smoke")}/>
                    <img src={addInfoKill("Headshot")}/>
                    <div className="event_text" style={{color: colorNick(xunder)}}>{xunder.nick}</div>
                </Log>
                <Log type={"roundBegin"}>
                    <p>Раунд начался</p>
                </Log>
                <Log type={"defuse"}>
                    <div className="event_text" style={{color: colorNick(xunder)}}>{xunder.nick}</div>
                    <img src={thingsImg("Defusekit")}/>
                    <p>разминировал бомбу</p>
                </Log>
                <Log type={"t_suicide"}>
                    <div className="event_text" style={{color: colorNick(ugly4)}}>{ugly4.nick}</div>
                    <p>совершил суицид</p>
                </Log>
                <Log type={"ct_win"}>
                    <p>Раунд завершен - Победитель:</p>
                    <div className="event_text" style={{color: colorNick(frost)}}>CT</div>
                    <p>(</p>
                    <div className="event_text" style={{color: colorNick(tamada)}}>10</div>
                    <p>-</p>
                    <div className="event_text" style={{color: colorNick(frost)}}>5</div>
                    <p>) -</p>
                    <div className="event_text" style={{color: colorNick(frost)}}>Бомба разминирована</div>
                </Log>
                <Log type={"kill"}>
                    <div className="event_text" style={{color: colorNick(frost)}}>{frost.nick}</div>
                    <img src={addInfoKill("Inferno")}/>
                    <div className="event_text" style={{color: colorNick(rusttle)}}>{rusttle.nick}</div>
                </Log>
                <Log type={"kill"}>
                    <div className="event_text" style={{color: colorNick(frost)}}>{frost.nick}</div>
                    <img src={weaponImg("SSG-08")}/>
                    <img src={addInfoKill("Noscope")}/>
                    <div className="event_text" style={{color: colorNick(ugly4)}}>{ugly4.nick}</div>
                </Log>
                <Log type={"kill"}>
                    <div className="event_text" style={{color: colorNick(frost)}}>{frost.nick}</div>
                    <img src={weaponImg("SSG-08")}/>
                    <img src={addInfoKill("Smoke")}/>
                    <div className="event_text" style={{color: colorNick(tamada)}}>{tamada.nick}</div>
                </Log>
            </div> 
        </div>
    )
}

export default ScrollLog;