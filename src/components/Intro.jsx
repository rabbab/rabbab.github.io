import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import "../styles/Home.css";
import "../styles/Portfolio.css";
import Typed from "react-typed";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import resume from "../assets/rf_resume.pdf";

const Intro = () => {
  const [textList, setTextList] = useState([
    "Frontend Developer",
    "Web Designer",
    "React.js Developer",
  ]);
  return (
    <>
      <section className="home" id="home">
        <div className="home-content">
          <h3>Hello, It's me</h3>
          <h1>Rabab Fatima</h1>
          <h3>
            And I'm a{" "}
            <span>
              <Typed
                strings={textList}
                typeSpeed={50}
                backSpeed={30}
                loop
                smartBackspace
              />
            </span>
          </h3>
          <p>
            High level of experience in web designing and development,
            producting the Quality work
          </p>
          <div className="social-media">
            <NavLink to="https://www.linkedin.com/in/rababfatima94/">
              <FaLinkedin />
            </NavLink>
            <NavLink to="https://github.com/rabbab">
              <FaGithub />
            </NavLink>
          </div>
          <a href="rf_resume.pdf" className="button" download="rf_resume.pdf">
            Download Resume
          </a>
        </div>

        <div className="home-img">
          <img src="./img/avatar.png" alt="home-img" />
        </div>
      </section>
    </>
  );
};

export default Intro;
