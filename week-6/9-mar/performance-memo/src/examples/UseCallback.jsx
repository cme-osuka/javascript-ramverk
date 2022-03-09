import React, { useState, useCallback } from "react";
import "./../App.css";

function UseCallback() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  /*function showName() {
    console.log(name);
  }*/

  const submitForm = useCallback(() => {
    console.log(name);
  }, [name, email])


  return (
    <div className="App">
      <header className="App-header">
        <input value={name} onChange={e => setName(e.target.value)} /> 
        <input value={email} onChange={e => setEmail(e.target.value)} /> 
        <button onClick={submitForm}>Visa namn</button> 
      </header>
    </div>
  );
}

export default UseCallback;
