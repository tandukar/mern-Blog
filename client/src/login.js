import React, { Component } from 'react';
import "./signup.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Login=()=>{
    return (
 <div className="login-wrapper">
      <form>
    
        <label>
          <p>Email</p>
          <input type="text" />
        </label>
        {/* &ensp;   */}
        <br></br>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <br></br>
          
          <button type="button" className="button button2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
    
};


export  default Login; 