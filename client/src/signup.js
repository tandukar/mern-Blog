import React from "react";
import "./signup.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Signup = () => {
  return (
    <div className="login-wrapper">
      <form>
        <label>
          <p>First Name</p>
          <input type="text" />  
        </label>
        &emsp;
        <label>
          <p>Last Name</p>
          <input type="text" /> 
        </label>
        <br></br>
        <label>
          <p>Email</p>
          <input type="text"/>
        </label>
        &emsp;
        <label>
          <p>Age</p>
          <input type="number" min="12" max="135" />
        </label>
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

export default Signup;
