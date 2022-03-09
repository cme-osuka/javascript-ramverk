import React, { useState, useMemo } from "react";
import "./../App.css";

function UseMemo() {
  const [count, setCount] = useState(0);
  const array = new Array(10000).fill(3);
  const reducedValue = useMemo(
    () =>
      array.reduce((sum, current) => {
        console.log("Räknat ut en gång till");
        return sum + current;
      }),
    []
  );
  console.log("App renderades om");

  return (
    <div className="App">
      <header className="App-header">
        <h1>{count}</h1>
        <h1>{reducedValue}</h1>

        <button onClick={() => setCount(count + 1)}>Öka count</button>
      </header>
    </div>
  );
}

export default UseMemo;
