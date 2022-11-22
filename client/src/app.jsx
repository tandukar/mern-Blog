import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";
import Navbar from "./components/navbar";
import Signup from "./components/signup";
import Login from "./components/login";
import Fetch from "./components/fetch";


const App = () => {
var registered =false;
var loggedIn =false;

  return <div>
    <Navbar/>
    {/* {registered ? <div> <h3>Login</h3><Login/></div>: <div><h3>Sign up</h3><Signup/></div>  } */}

    <Router>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/register" element={<Signup />}/>
    </Routes>
  </Router>
  
     
  
  </div>
};





export default App;
