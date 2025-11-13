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
          A passionate software developer and designer, exploring the
          intersection of technology and creativity.
        </p>
        <p>
          I specialize in creating innovative solutions that merge technology
          and design to solve real-world problems.
        </p>

        <a className="cta" href="#about">
          Learn More About Me
        </a>
      </div>
    </section>
  );
}
