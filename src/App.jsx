import { useState } from "react";
import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
// import UserName from "./Pages/UserName";
import Profile from "./Pages/UserName";
import Post from "./components/Post";
import Comment from "./components/Comment";
import Posting from "./components/Posting";
import Commented from "./components/Commented";
import User from "./components/User";
import Connect from "./components/Connect";
import Posted from "./components/Posted";
import PostComment from "./components/PostComment";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/events" element={<Events />} /> */}
        {/* <Route path="/feed" element={<Feed />} /> */}
        {/* <Route path="/Username" element={<UserName />} /> */}
         <Route path="/profile" element={<Profile />} />
      </Routes>
      <Post />
      <Comment/>
      <Posting/>
      <Commented/>
      <User />
      <Connect/>
      <Posted/>
      <PostComment/>
      <Footer/>
    </Router>
  );
}

export default App;
