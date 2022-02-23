import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import User from "./pages/User";
import Users from "./pages/Users";

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <Router>
          <div>
            {/* <a href="/about">About</a>*/}
            <Link to="/">Home</Link>
            <Link to="/user">Users</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/user" element={<Users />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </HelmetProvider>
    </div>
  );
}

export default App;
