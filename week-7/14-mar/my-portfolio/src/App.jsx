import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./partials/Navbar";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import SingleProject from "./pages/SingleProject";
import About from "./pages/About";
import Contact from "./pages/Contact";

import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<SingleProject />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
