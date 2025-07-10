import { useState } from 'react'
import React from 'react'
import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Post from "./components/Post";

function App() {
 
  return (
    <Router>
     <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/events" element={<events/>} />
        <Route path="/feed" element={<feed/>} />
        <Route path="/profile" element={<Profile/>} /> */}
      </Routes>
      <Post />
    </Router>
  )
}

export default App
