import React from "react";
import "./qualification.css";
const Qualification = () => {
  return (
    <section className="qualificaton section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button button__flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>Education
          </div>
          <div className="qualification__button button__flex">
            <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
          </div>
        </div>

        <div className="qualification__sections">
          {/*  =============== Qualification Content - 1 Starts ==============*/}
          <div className="qualification__content qualification__content-active">
            {/* ============ Qualification Data 1 ============== */}
            <div className="qualification__data">
              <h3 className="qualification__title">Computer Science</h3>
              <span className="qualification__subtitle">Tasued</span>
              <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i>2021 - 2024
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qulification__line"></span>
              </div>
            </div>

            {/* ============ Qualification Data 2 ============== */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qulification__line"></span>
              </div>
              <h3 className="qualification__title">Web Developer</h3>
              <span className="qualification__subtitle">Boldlinks</span>
              <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i>2022 - 2023
              </div>
            </div>

            {/* Qualification Data 3 */}
            <div className="qualification__data">
              <h3 className="qualification__title">Frontend Developer</h3>
              <span className="qualification__subtitle">Boldlinks</span>
              <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i>2020 - 2021
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qulification__line"></span>
              </div>
            </div>

            {/* Qualification Data 4 */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                {/* <span className="qulification__line"></span> */}
              </div>
              <h3 className="qualification__title">UI/UX</h3>
              <span className="qualification__subtitle">Boldlinks</span>
              <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i>2022 - 2023
              </div>
            </div>
          </div>
          {/*  ============ Qualification Content - 1 Ends ==========*/}
          {/* ======================================================== */}

          {/*  ============ Qualification Content  - 2 Starts  ============= */}
          <div className="qualification__content">
            {/* Qualification Data 1 */}
            <div className="qualification__data">
              <h3 className="qualification__title">Product Designer</h3>
              <span className="qualification__subtitle">Microsoft- Spain</span>
              <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i>2022 - Present
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qulification__line"></span>
              </div>
            </div>

            {/* Qualification Data 2 */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qulification__line"></span>
              </div>
              <h3 className="qualification__title">UX Designer</h3>
              <span className="qualification__subtitle">Apple Inc - Spain</span>
              <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i>2022 - 2023
              </div>
            </div>

            {/* Qualification Data 3 */}
            <div className="qualification__data">
              <h3 className="qualification__title">UI Designer</h3>
              <span className="qualification__subtitle">Figma - Spain</span>
              <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i>2020 - 2021
              </div>
              <div>
                <span className="qualification__rounder"></span>
                {/* <span className="qulification__line"></span> */}
              </div>
            </div>
          </div>
          {/* ================= Qualification Content  - 2 Ends  ==================== */}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
