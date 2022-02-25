import logo from './logo.svg';
import './App.css';

import { Routes, Route } from "react-router-dom"

import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/login" element={<Login />} /> 
        </Routes>
      </header>
    </div>
  );
}

export default App;
