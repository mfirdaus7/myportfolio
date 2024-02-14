import React from "react";
import "./about.css";
import myImage from "../../assets/my-image2.jpg";
import { GiGraduateCap } from "react-icons/gi";
import { BsBookmarkStar } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={myImage} alt="Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiGraduateCap className="about__icon" />
              <h5>Degree</h5>
              <small>
                Bsc.(Hons) Science Computer Software Development <br />
                <i>University Sultan Zainal Abidin.</i>
              </small>
            </article>

            <article className="about__card">
              <BsBookmarkStar className="about__icon" />
              <h5>Current GPA</h5>
              <small>2.98</small>
            </article>

            <article className="about__card">
              <TfiWorld className="about__icon" />
              <h5>Domains</h5>
              <small>
                <ul>
                  <li>Front End Development</li>
                  <li>Angular</li>
                  <li>Liferay</li>
                  <li>React</li>
                </ul>
              </small>
            </article>
          </div>
          <p>
            "I'm a Computer Science graduate from University Sultan Zainal
            Abidin, currently specializing as a Front End Developer. With a
            focus on Liferay and Angular, I've honed my skills in crafting
            dynamic and responsive user interfaces. Recently, I've begun delving
            into React, eager to broaden my toolkit and stay ahead in the
            ever-evolving landscape of front-end development. I thrive on the
            challenges of building intuitive and efficient interfaces, and I'm
            committed to continuously enhancing my expertise while contributing
            meaningfully to innovative projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
