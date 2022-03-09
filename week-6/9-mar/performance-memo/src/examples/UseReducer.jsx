import React, { useReducer, useState } from "react";
import "./../App.css";

const initialValue = [];

function reducer(state, action) {
  console.log("TYPE:", action.type)
  switch (action.type) {
    case "ADD":
      console.log("NAME:", action.name)
      return [...state, { id: state.length + 1, name: action.name }];
    case "RESET":
      return [];
    default:
      throw new Error();
  }
}

function UseReducer() {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <button onClick={() => dispatch({ type: "ADD", name: name })}>Lägg till</button>
          <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        </div>
        <ul>
          {
            state.map(item => <li key={item.id}>{item.name}</li>)
          }
        </ul>
      </header>
    </div>
  );
}

export default UseReducer;
