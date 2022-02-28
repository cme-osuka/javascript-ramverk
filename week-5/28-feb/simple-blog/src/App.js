import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { login, getAllPosts, getPost, createPost } from "./api";

// Pages
import Home from "./pages/Home";
import Post from "./pages/Post";
import NewPost from "./pages/NewPost";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Header from "./pages/sections/Header";


/**
 * Routes:
 *
 * "/" - Förstasidan
 * "/post/:id" - Enskild post
 * "/login" - Logga in och hämta en token
 * "/post/new" - Skapa en ny post
 *
 */

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/new" element={<NewPost />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
