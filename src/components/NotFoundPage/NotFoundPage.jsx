import React from "react";
import "./NotFoundPage.css"

function NotFoundPage(){

    return(
        <div  className="window_error">
            <p style={{fontSize: "35px"}}>Error 404</p>
            <br/>
            <p>Адрес страницы указан неверно!</p>
        </div>
        
    )
}

export default NotFoundPage;