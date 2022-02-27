import logo from './logo.svg';
import './App.css';

import { Routes, Route } from "react-router-dom"

import Login from "./pages/Login";
import Profile from "./pages/Profile";
import EditUser from "./pages/EditUser";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/editUser" element={<EditUser />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
