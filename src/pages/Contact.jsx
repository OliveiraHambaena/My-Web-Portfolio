import React from "react";
import PageNav from "../components/PageNav";

export default function Contact({ current, onNav }) {
  return (
    <section className="page contact">
      <PageNav current={current} onNav={onNav} />
      <div className="content-right contact-card">
        <h1>Get In Touch</h1>

        <div className="contact-grid">
          <div className="contact-item email-item cursor-target">
            <div className="contact-icon">📧</div>
            <strong>Email</strong>
            <a
              href="mailto:ollymeansoliveira@gmail.com"
              className="contact-link"
            >
              ollymeansoliveira@gmail.com
            </a>
          </div>

          <div className="contact-item phone-item cursor-target">
            <div className="contact-icon">📱</div>
            <strong>Phone</strong>
            <a href="tel:+264818696891" className="contact-link phone-cta">
              +264 81 869 6891
            </a>
          </div>

          <div className="contact-item location-item cursor-target">
            <div className="contact-icon">📍</div>
            <strong>Location</strong>
            <p className="location-text">Windhoek, Namibia</p>
          </div>

          <div className="contact-item resume-item cursor-target">
            <div className="contact-icon">📄</div>
            <strong>Resume</strong>
            <a
              href="https://drive.google.com/file/d/1MMfBadHI118D61QyxZ5vjhf0Jx6wBlEp/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="resume-btn"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
