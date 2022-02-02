import React from "react";
import Button from "./Button";

function NameRegistration(props) {
  return (
    <div>
      <input type="text" placeholder={props.placeholder} />
      <Button  
        text="Det här är en knapp" 
        handleClick={props.handleClick}
      />
    </div>
  );
}

export default NameRegistration;
