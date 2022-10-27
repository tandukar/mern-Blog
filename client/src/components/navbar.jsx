import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light ">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="http://localhost:3000/">Navbar</a>
  
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <a class="nav-link" href="https://www.youtube.com/watch?v=t6isux5XWH0&t=98s">Blogs <span class="sr-only"></span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">Login</a>
        </li>
       
      </ul>
      
    </div>
  </nav>
  );
};

export default Navbar;
