import React from "react";

function Button(props) {
  return <button onClick={props.handleClick}>{props.text}</button>
}

export default Button