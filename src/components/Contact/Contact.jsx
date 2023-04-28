import { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_0w2i93b", "template_aq3xxdg", form.current, "NWJlAQlHX4S1t2Ys2");
    e.target.reset();
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <AnimationOnScroll animateIn="animate__fadeInLeft">
            <h3 className="contact__title">Talk to me</h3>
            <div className="contact__info">
              {/* Contact Card -1 */}
              <div className="contact__card">
                <i className="bx bx-mail-send contact__card-icon"></i>
                <h3 className="contact__card-title">Email</h3>
                <span className="contact__card-data">adewale.ologbenla1806@gmail.com</span>
                <a href="mailto:ologbenla1806@gmail.com" className="contact__button" target="_blank">
                  Write me
                  <i
                    className="bx bx-right-arrow-alt contact__button-icon
                "
                  ></i>
                </a>
              </div>
              {/* Contact Card -2 */}
              <div className="contact__card">
                <i className="bx bxl-whatsapp contact__card-icon"></i>
                <h3 className="contact__card-title">Whatsapp</h3>
                <span className="contact__card-data">081-4392-6052</span>
                <a href="https://wa.link/g5c3pm" className="contact__button" target="_blank">
                  Write me
                  <i
                    className="bx bx-right-arrow-alt contact__button-icon
                "
                  ></i>
                </a>
              </div>
              {/* Contact Card -3 */}
              <div className="contact__card">
                <i className="bx bxl-messenger contact__card-icon"></i>
                <h3 className="contact__card-title">Messanger</h3>
                <span className="contact__card-data">adewale.ologbenla.9</span>
                <a href="https://m.me/adewale.ologbenla.9" target="_blank" className="contact__button">
                  Write me
                  <i
                    className="bx bx-right-arrow-alt contact__button-icon
                "
                  ></i>
                </a>
              </div>
            </div>
          </AnimationOnScroll>
        </div>

        <div className="contact__content">
          <AnimationOnScroll animateIn="animate__fadeInRight">
            <h3 className="contact__title">Write me your project</h3>
            {/* ============ Contact Form ===========  */}
            <form ref={form} onSubmit={sendEmail} className="contact__form">
              <div className="contact__form-div">
                <label className="contact__form-tag">Name</label>
                <input type="text" name="name" placeholder="Insert your name" className="contact__form-input" required />
              </div>

              <div className="contact__form-div">
                <label className="contact__form-tag">Email</label>
                <input type="email" name="email" placeholder="Insert your email" className="contact__form-input" required />
              </div>

              <div className="contact__form-div">
                <label className="contact__form-tag">Phone</label>
                <input type="phone" name="phone" placeholder="Insert mobile number" className="contact__form-input" required />
              </div>

              <div className="contact__form-div contact__form-area">
                <label className="contact__form-tag">Project</label>
                <textarea name="project" cols="30" rows="10" className="contact__form-input" placeholder="Write your project" required></textarea>
              </div>
              <button className="button" type="submit">
                <span className="button-text">Send</span>
                <span>
                  <i className="button-icon uil uil-arrow-right"></i>
                </span>
              </button>
              {/* <button type="submit" className="button button--flex">
                Send Message
              </button> */}

              {/*  */}
              {/* <a href="#contact" className="button">
                <span className="button-text">Say Hi </span>
                <span>
                  <i className="button-icon uil uil-arrow-right"></i>
                </span>
              </a> */}
              {/*  */}
            </form>
          </AnimationOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Contact;
