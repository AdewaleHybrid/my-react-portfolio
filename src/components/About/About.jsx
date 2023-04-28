import React from "react";
import "./about.css";
import me from "../../assets/me.JPG";
import CV from "../../assets/CV.pdf";
import Info from "./Info";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid">
        {/* <AnimationOnScroll animateIn="animate__fadeInLeft"> */}
        <img src={me} alt="" className="about__img" />
        {/* </AnimationOnScroll> */}
        <div className="about__data">
          <AnimationOnScroll animateIn="animate__fadeInRight">
            <Info />

            <p className="about__description">
              Fullstack Developer, I develop and maintain web services and interfaces. I have years experience in both frontend and backend
              application and many clients are happy with the project carried out.
            </p>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp">
            {/* hhhh */}
            <a href={CV} className="button cv" download>
              <span className="button-text">Download CV </span>
              <span>
                <i className="button-icon uil uil-arrow-down"></i>
              </span>
            </a>
            {/* hhh */}
          </AnimationOnScroll>
        </div>
      </div>
    </section>
  );
};

export default About;
