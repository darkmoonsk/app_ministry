import React from "react";
import classes from "./ButtonStandard.module.css";

function Button(props) {
    return (
        <button className={classes["button-65"]} onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export default Button;