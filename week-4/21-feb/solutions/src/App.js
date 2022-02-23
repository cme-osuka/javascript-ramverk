import logo from './logo.svg';
import './App.css';
import OnceOnMount from './components/OnceOnMount';
import Filter from './components/Filter';
import Interval from './components/Interval';
import { useState } from 'react';
import LoginForm from './components/LoginForm';

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        { /* <button onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button>
        { show && <Interval /> } */ }
        <LoginForm />
      </header>
    </div>
  );
}

export default App;
