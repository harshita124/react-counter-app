import React from "react";
import "./Button.css"

function Button(props){
    return(<button id="counter-btn" onClick={props.onClick}>{props.buttonText}</button>);
}

export default Button;