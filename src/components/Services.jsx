import React from "react";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h2 className="heading">
        Offer <span>Services</span>
      </h2>

      <div className="container services_container">
        <article className="service">
          <div className="service__head">
            <h3>Maintenance</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Ongoing support to ensure that it stays up-to-date</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Security updates</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content Update</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Bug Fixes</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Custom website design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User interface (UI) design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Front-end development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Back-end development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Database design and management</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>E-commerce development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Online store design and development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Payment gateway integration</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Shopping cart integration</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Order management system integration</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Product management system integration</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
