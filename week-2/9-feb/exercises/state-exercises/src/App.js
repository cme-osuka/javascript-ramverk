import React, { useState } from "react";
import './App.css';
import BasicState from "./components/BasicState";
import ObjectState from "./components/ObjectState";
import ArrayState from "./components/ArrayState";
import Parent from "./components/Parent";

const components = ["basic", "object", "array", "parent"];

function App() {
  const [selected, setSelected] = useState("basic");

  function nextComponent() {
    const currentIndex = components.indexOf(selected);
    const nextIndex = currentIndex === components.length - 1 ? 0 : currentIndex + 1;

    const nextComponent = components[nextIndex];
    setSelected(nextComponent);
  }

  return (
    <div className="App">
      <button onClick={nextComponent}>Nästa</button>
      <header className="App-header">
        { selected === "basic" ? <BasicState /> : null }
        { selected === "object" ? <ObjectState /> : null }
        { selected === "array" ? <ArrayState /> : null }
        { selected === "parent" ? <Parent /> : null }
      </header>
    </div>
  );
}

export default App;
