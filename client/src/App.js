import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import Navbar from "./navbar";
import Signup from "./signup";
import Login from "./login";


const App = () => {
var registered =false;

  return <div>
    <Navbar/>
    {registered ? <div> <h3>Login</h3><Login/></div>: <div><h3>Sign up</h3><Signup/></div>  }
  
     
  
  </div>
};

export default App;
