import React from "react";
import PageNav from "../components/PageNav";

export default function Contact({ current, onNav }) {
  return (
    <section className="page contact">
      <PageNav current={current} onNav={onNav} />
      <div className="content-right contact-card">
        <h1>Get In Touch</h1>

        <div className="contact-item">
          <strong>Email</strong>
          <a href="mailto:ollymeansoliveira@gmail.com">
            ollymeansoliveira@gmail.com
          </a>
        </div>

        <div className="contact-item">
          <strong>Phone</strong>
          <span>+264 81 869 6891</span>
        </div>

        <div className="contact-item">
          <strong>Location</strong>
          <span>Windhoek, Namibia</span>
        </div>

        <div className="contact-item">
          <strong>Resume</strong>
          <a href="/old/resume.pdf" target="_blank" rel="noreferrer">
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
