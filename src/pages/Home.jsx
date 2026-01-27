import React from "react";
import PageNav from "../components/PageNav";

export default function Home({ current, onNav }) {
  return (
    <section className="page home">
      <PageNav current={current} onNav={onNav} />
      <div className="avatar">
        {/* serve from public/old/myphoto.jpg */}
        <img
          src="https://res.cloudinary.com/dx4gymyem/image/upload/v1763038588/lead-developer-photo_ppa3ox.jpg"
          alt="avatar"
        />
      </div>

      <div className="content-right">
        <h1>
          HI, I'M OLIVEIRA
          <br />
          HAMBAENA
        </h1>
        <p>
        I am a Software Engineer, Tech Entrepreneur, and final-year Computer Science student with a passion for building scalable digital solutions.
        </p>
        <p>
        As the founder of Involv Software Corporation, I specialize in bridging the gap between complex software architecture and real-world business automation. From engineering AI-driven agents to managing critical IT infrastructure, I thrive on solving high-pressure technical challenges with precision and discipline.
        </p>

        <a className="cta" href="#about">
          Learn More About Me
        </a>
      </div>
    </section>
  );
}
