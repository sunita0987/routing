import { useState } from "react";
import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import UserName from "./Pages/UserName";
import Profile from "./Pages/UserName";
import Comment from "./Pages/Comment";
import Posting from "./Pages/Posting";
import Commented from "./Pages/Commented";
import User from "./Pages/User";
import Connect from "./Pages/Connect";
import Posted from "./Pages/Posted";
import PostComment from "./Pages/PostComment";
import Footer from "./components/Footer";
import Events from "./Pages/Events";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Home />} />
        <Route path="/feed" element={<Profile />} />
        <Route path="/userName" element={<UserName />} />
      </Routes>
      <Events />
      <Comment />
      <Posting />
      <Commented />
      <User />
      <Connect />
      <Posted />
      <PostComment />
      <Footer />
    </Router>
  );
}

export default App;
