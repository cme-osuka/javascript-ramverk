import logo from './logo.svg';
import './App.css';
import BasicState from "./components/BasicState";
import ObjectState from "./components/ObjectState";
import ArrayState from "./components/ArrayState";
import Parent from "./components/Parent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Parent />
      </header>
    </div>
  );
}

export default App;
