import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ExampleComponent from "./components/ExampleComponent";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <ExampleComponent
          list={[]}
          name="Hej"
          data={{
            breakfast: "Fralla",
            hasEaten: false,
          }}
        />
      </header>
    </div>
  );
}

export default App;
