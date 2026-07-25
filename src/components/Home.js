import React from "react";
import "./home.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Home() {

  return (
    <section id="home" className="home">

      <div className="home-content">

        <h3>
          Hello, I'm
        </h3>

        <h1>
          Ilef <span>ABBES</span>
        </h1>

        <h2>
          Full Stack Web Developer
        </h2>

        <p>
          I build modern and scalable web applications using 
          React.js, Node.js, Express.js, and MongoDB.
        </p>


        <div className="home-buttons">

          <a 
            href="#projects"
            className="btn"
          >
            View My Projects
          </a>


          <a 
            href="#contact"
            className="btn-outline"
          >
            Contact Me
          </a>

        </div>


        <div className="social-icons">

          <a
            href="https://github.com/abbesilef1-hub"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>


          <a
            href="https://www.linkedin.com/in/ilef-abbes-a75400253/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

        </div>


      </div>

    </section>
  );
}

export default Home;