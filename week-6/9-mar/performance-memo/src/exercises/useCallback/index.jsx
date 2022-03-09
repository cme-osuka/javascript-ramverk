import { useState, useCallback } from "react";
import List from "./List";

/**
 * useCallback - Övning
 * Modifiera CallbackExercise så när du klickar på
 * toggle-knappen så ska inte "Renderade om List"
 * skrivas ut i konsollen
 */

function CallbackExercise() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const getItems = () => {
    const defaultValueIfNumberIsNaN = Number.isNaN(number) ? 0 : number;
    return [
      defaultValueIfNumberIsNaN,
      defaultValueIfNumberIsNaN + 1,
      defaultValueIfNumberIsNaN + 2
    ];
  }

  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black"
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setDark(!dark)}>Toggle</button>
      <List getItems={getItems} />
    </div>
  );
}

export default CallbackExercise;