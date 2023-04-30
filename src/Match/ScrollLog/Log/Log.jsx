import React from "react";
import "./Log.css"

function Log({type, children}){
    
    function colorBorder(event){
        switch(event){
            case "login": return "1px solid #00A621"; break;
            case "logout": case "roundBegin" : return "1px solid #FFFFFF"; break;
            case "kill": return "1px solid #EC0101"; break;
            case "t_win": case "bomb_planted" : case "t_suicide" : return "1px solid #F44E1C"; break;
            case "ct_win": case "defuse" : case "ct_suicide" : return "1px solid #1CBCFF"; break;
        }          
    }
    return(
        <div class="log" style={{border: colorBorder(type), 
                                opacity: (type == "login")||(type == "logout") ? "0.5" : "1",
                                marginBottom: type == "roundBegin" ? "25px" : null}}> 
            {children}
        </div>
    )
}

export default Log;