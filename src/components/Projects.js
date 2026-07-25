import React from "react";
import "./projects.css";


function Projects() {

const projects = [

{
  title: "Pet Care System : Adoption & E-Commerce Platform",

  image: "/images/pet1.PNG",

  description:
  "A Full Stack MERN platform for pet adoption and e-commerce management, providing users with a complete solution to browse, adopt pets, and manage online products.",

  technologies:
  "React.js | Node.js | Express.js | MongoDB",

  demo:
  "https://pets-project-final-ayy8.vercel.app/",

  github:
  "https://github.com/abbesilef1-hub/pets-project-final"
},


{
  title: "MERN Full Stack Application",

  image: "/images/mern1.PNG",

  description:
  "A Full Stack web application built with a client-server architecture, featuring dynamic data management through RESTful APIs and efficient communication between the frontend and backend.",

  technologies:
  "React.js | Node.js | Express.js | MongoDB",

  demo:
  "https://project-back-front-mern-zi25.vercel.app/",

  github:
  "https://github.com/abbesilef1-hub/project-back-Front-Mern"
},

{
  title: "React Router Project",

  image: "/images/movies.PNG",

  description:
    "A React application demonstrating client-side routing with React Router, enabling seamless navigation between multiple pages without reloading the application.",

  technologies:
    "React.js • React Router • JavaScript • JSX • CSS",

  github:
    "https://github.com/abbesilef1-hub/project-react-router"
},

{
  title: "React Props Project",

  image: "/images/fifa.PNG",

  description:
    "A React application demonstrating component-based architecture and data sharing using props to create reusable and dynamic user interfaces.",
    
  technologies: "React.js • JavaScript • JSX • CSS",

  github:
    "https://github.com/abbesilef1-hub/project-react-props"
}

];


return (

<section id="projects">

<h1>My Projects</h1>


<div className="projects">


{
projects.map((project,index)=>(


<div className="card" key={index}>


<img 
src={project.image}
alt={project.title}
/>


<h2>{project.title}</h2>


<p>
{project.description}
</p>


<h4>
Technologies :
</h4>

<span className="tech">
{project.technologies}
</span>



<div className="project-links">

  {project.demo && (
    <a
      href={project.demo}
      target="_blank"
      rel="noreferrer"
    >
      Live Demo
    </a>
  )}

  <a
    href={project.github}
    target="_blank"
    rel="noreferrer"
  >
    GitHub
  </a>

</div>


</div>


))
}


</div>


</section>

)

}


export default Projects;