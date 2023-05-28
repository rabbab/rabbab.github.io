import React from "react";
import img1 from "../assets/portfolio1.jpg";
import img2 from "../assets/portfolio2.jpg";
import img3 from "../assets/portfolio3.jpg";
import img4 from "../assets/portfolio4.jpg";
import img5 from "../assets/portfolio5.png";
import img6 from "../assets/portfolio6.jpg";

const Experience = () => {
  return (
    <>
      <section id="experience">
        <h2 className="heading">
          Latest <span>Project</span>
        </h2>
        <div className="container portfolio__container">
          <article className="portfolio__item">
            <div className="portfolio__item_image">
              <img src={img1} alt="img1" />
            </div>
            <h3>This is portfolio item</h3>
            <a
              href="https://github.com/rabbab"
              target="__blank"
              className="about__btn"
            >
              Github
            </a>
            {/* <a href="#" className="about__btn" target="__blank">
              Live demo
            </a> */}
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item_image">
              <img src={img2} alt="img1" />
            </div>
            <h3>This is portfolio item</h3>
            <a
              href="https://github.com/rabbab"
              target="__blank"
              className="about__btn"
            >
              Github
            </a>
            {/* <a href="#" className="about__btn" target="__blank">
              Live demo
            </a> */}
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item_image">
              <img src={img3} alt="img1" />
            </div>
            <h3>This is portfolio item</h3>
            <a
              href="https://github.com/rabbab"
              target="__blank"
              className="about__btn"
            >
              Github
            </a>
            {/* <a href="#" className="about__btn" target="__blank">
              Live demo
            </a> */}
          </article>
        </div>
      </section>
    </>
  );
};

export default Experience;
