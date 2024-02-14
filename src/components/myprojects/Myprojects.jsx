import React from "react";
import "./myprojects.css";
import IMG1 from "../../assets/bnm.png";
import IMG2 from "../../assets/aml.png";
import IMG3 from "../../assets/cxrus.png";
import IMG4 from "../../assets/img4.png";

const Myprojects = () => {
  return (
    <section id="myprojects">
      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Bank Negara Malaysia</h3>
          <small className="text-light">Liferay DXP</small>
          <div className="portfolio__item-cta">
            <a
              href="https://www.bnm.gov.my/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Visit Website
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>AML Malaysia</h3>
          <small className="text-light">Liferay DXP</small>
          <div className="portfolio__item-cta">
            <a
              href="https://amlcft.bnm.gov.my/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Visit Website
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>My Portfolio(This website)</h3>
          <small className="text-light">ReactJs</small>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Thakshila-Bandara/my-portfolio"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              GitLab
            </a>
            <a
              href="https://thakshila-bandara.github.io/my-portfolio/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Visit Website
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>CXRUS</h3>
          <small className="text-light">Magnolia CMS</small>
          <div className="portfolio__item-cta">
            <a
              href="https://www.cxrus.com/home"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Visit Website
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Myprojects;
