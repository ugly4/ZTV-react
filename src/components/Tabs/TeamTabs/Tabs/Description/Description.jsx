import React from "react";
import "./Description.css"

function Description(props){
    return(
        <div class="tabcontent_info" >
              <p>{props.desc}</p>
        </div>
    );
}

export default Description;