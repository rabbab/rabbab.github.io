import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { FaFolder } from "react-icons/fa";
// import "../styles/about.css";

const About = () => {
  return (
    <section id="about" className="about">
      {/* <h5>Get to know</h5>
      <h2>About me</h2> */}
      <h2 className="heading">
        About <span>Me</span>
      </h2>
      <div className="container about_container">
        <div className="about__me">
          <div className="about__me-image">
            <img src="./img/avatar.png" alt="avatar" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>4+ years</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>24+ </small>
            </article>
            <article className="about__card">
              <FaFolder className="about__icon" />
              <h5>Pojects</h5>
              <small>42+ </small>
            </article>
          </div>
          <p>
            I am a Software development professional, having more than 4 years
            of experience in software design, development and integration.
            Advanced knowledge of technologies in which React.js, Next.js,
            Node.js, Redux, for database Mongo DB, Core PHP, PHP Laravel/Symfony
            are top of the line. I am a self-directed leader who fosters a
            collaborative and supportive team environment. Passionate about
            learning new technologies & welcoming new technical challenges.
          </p>
          <button className="about__btn">Let's Talk</button>
        </div>
      </div>
    </section>
  );
};

export default About;
