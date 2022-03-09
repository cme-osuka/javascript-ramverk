import React, { useState, useRef, useEffect } from "react";
import "./../App.css";

function UseRef() {
  const [name, setName] = useState("");
  const ref = useRef(null);

  const { useState, useRef, useEffect } = React;
    
  /*function focusInput() {
    ref.current.focus();
  }*/

  function saveName() {
    ref.current = name;
  }

  function getPrevName() {
    console.log(ref.current);
  }

  console.log("App renderades om");

  return (
    <div className="App">
      <header className="App-header">
        <input value={name} onChange={e => setName(e.target.value)} />
        <button onClick={saveName}>Spara</button>
        <button onClick={getPrevName}>Föregående</button>
      </header>
    </div>
  );
}

export default UseRef;