import React from "react";
import "./footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";


function Footer() {

  return (
    <footer className="footer">

      <h3>Ilef.dev</h3>

      <p>
        Full Stack MERN Developer
      </p>


      <div className="socials">

        <a
          href="https://www.linkedin.com/in/ilef-abbes-a75400253/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>


        <a
          href="https://github.com/abbesilef1-hub"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

      </div>


      <p className="copyright">
        © 2026 Ilef ABBES. All rights reserved.
      </p>


    </footer>
  );
}


export default Footer;