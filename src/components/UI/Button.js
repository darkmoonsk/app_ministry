import React from "react";
import classes from "./Button.module.css";

function Button(props) {
    return (
        <button className={classes["button-73"]} onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export default Button;
