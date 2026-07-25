import React from "react";
import "./navbarr.css";


function Navbar() {

  return (

    <nav>

      <h2 className="logo">
        Ilef.dev
      </h2>


      <ul className="nav-links">

        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#skills">Skills</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>

      </ul>


    </nav>

  );

}


export default Navbar;