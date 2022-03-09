import { useState, useReducer } from "react";

const initialState = [];

/**
 *
 * useReducer - Övning
 * 1. Skriv klart reducer-funktionen nedan så den
 * accepterar två action-typer:
 * - ADD: Lägger till värdet från inputfältet i listan
 * - RESET: Tar bort alla element i listan
 *
 * 2. Lägg till onClick-handlers på knapparna
 *
 */

const reducer = (items, action) => {
  switch (action.type) {
    default:
      return items;
  }
};

function UseReducerExercise() {
  const [items, dispatch] = useReducer(reducer, initialState);
  const [v, setV] = useState("BigBinary");
  return (
    <div>
      <div>
        <input value={v} onChange={(e) => setV(e.target.value)} />
        <button>Add</button> <button>Reset</button>
      </div>
      <ul>
        {items.map((item, ix) => (
          <li key={ix}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseReducerExercise;
