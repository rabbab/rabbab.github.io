import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../assets/data.json";

const Projects = () => {
  return (
    <>
      <div id="projects">
        <section>
          <article>
            <h2 className="project-head">Projects</h2>
            <Carousel
              showArrows={false}
              showIndicators={false}
              showStatus={false}
              showThumbs={false}
              interval={2000}
              infiniteLoop={true}
              autoPlay={true}
            >
              {data.projects.map((item, index) => (
                <div key={index} className="projects">
                  <img
                    className="project-img"
                    src={item.imgSrc}
                    alt={item.title}
                  ></img>
                  <aside>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <a target={"blank"} href={item.url}></a>
                  </aside>
                </div>
              ))}
            </Carousel>
          </article>
        </section>
      </div>
    </>
  );
};

export default Projects;
