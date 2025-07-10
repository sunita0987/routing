import { useState } from "react";
import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Post from "./components/Post";
import Comment from "./components/Comment";
import Posting from "./components/Posting";
import Commented from "./components/Commented";
import User from "./components/User";
import Connect from "./components/Connect";
import Posted from "./components/Posted";
import PostComment from "./components/PostComment";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/events" element={<events/>} />
        <Route path="/feed" element={<feed/>} />
        <Route path="/profile" element={<Profile/>} /> */}
      </Routes>
      <Post />
      <Comment/>
      <Posting/>
      <Commented/>
      <User />
      <Connect/>
      <Posted/>
      <PostComment/>
    </Router>
  );
}

export default App;
