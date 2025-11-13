import React from "react";
import PageNav from "../components/PageNav";

// Cloudinary icons mapping for project technologies
const CLOUDINARY_ICONS = {
  // Languages & Frameworks
  "HTML5.svg":
    "https://res.cloudinary.com/dx4gymyem/image/upload/v1763039663/HTML5_mi8e0l.svg",
  "CSS3.svg":
    "https://res.cloudinary.com/dx4gymyem/image/upload/v1763039660/CSS3_a11wlw.svg",
  "JavaScript.svg":
    "https://res.cloudinary.com/dx4gymyem/image/upload/v1763039663/JavaScript_g3awzk.svg",
  "Java.svg":
    "https://res.cloudinary.com/dx4gymyem/image/upload/v1763039663/Java_sgzkc0.svg",
  "PHP.svg":
    "https://res.cloudinary.com/dx4gymyem/image/upload/v1763039673/PHP_xbcamj.svg",
  "React.svg":
    "https://res.cloudinary.com/dx4gymyem/image/upload/v1763039674/React_vjzfoe.svg",

  // Tools & Platforms
  "wordpress.svg":
    "https://res.cloudinary.com/dx4gymyem/image/upload/v1763039686/wordpress_wooj26.svg",
  "Vite.js.svg":
    "https://res.cloudinary.com/dx4gymyem/image/upload/v1763039686/Vite.js_ahgqwc.svg",
  "react-router-icon.svg":
    "https://res.cloudinary.com/dx4gymyem/image/upload/v1763039675/react-router-icon_virueu.svg",

  // APIs & Services
  "AccuWeather.svg":
    "https://res.cloudinary.com/dx4gymyem/image/upload/v1763039658/AccuWeather_fqkxlx.svg",
  "tmdb-icon.svg":
    "https://res.cloudinary.com/dx4gymyem/image/upload/v1763039677/tmdb-icon_kyazus.svg",
  "youtube.svg":
    "https://res.cloudinary.com/dx4gymyem/image/upload/v1763039687/youtube_uksgyy.svg",

  // Databases
  "MySQL.svg":
    "https://res.cloudinary.com/dx4gymyem/image/upload/v1763039665/MySQL_ryx2k0.svg",

  // Fallback
  "notion.svg":
    "https://res.cloudinary.com/dx4gymyem/image/upload/v1763039671/notion_jriuh5.svg",
};

const TECH_ICON_STYLE = {
  width: "48px",
  height: "48px",
  objectFit: "contain",
  marginBottom: "6px",
};

// Optimize Cloudinary URLs for better performance
const optimizeUrl = (url) => {
  return url.replace("/upload/", "/upload/f_auto,q_auto,w_64,h_64/");
};

const ProjectCard = ({
  img,
  title,
  desc,
  features,
  tech,
  url,
  urlType = "Live Website",
}) => {
  const getIconUrl = (iconName) => {
    const cloudinaryUrl =
      CLOUDINARY_ICONS[iconName] || CLOUDINARY_ICONS["notion.svg"];
    return optimizeUrl(cloudinaryUrl);
  };

  return (
    <div className="project-card">
      <img src={img} alt={title} className="project-image" />
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{desc}</p>

      {features && (
        <>
          <p
            className="project-description"
            style={{ textDecoration: "underline" }}
          >
            Key Features:
          </p>
          <p className="project-description">{features}</p>
        </>
      )}

      <p
        className="project-description"
        style={{ textDecoration: "underline" }}
      >
        Built with:
      </p>
      <div
        className="tech-icons"
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {tech.map((t) => (
          <div
            key={t.name}
            className="icon-item"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "88px",
              textAlign: "center",
              fontSize: "0.85rem",
            }}
          >
            <img
              src={getIconUrl(t.icon)}
              alt={`${t.name} Logo`}
              className="tech-icon"
              style={TECH_ICON_STYLE}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = optimizeUrl(
                  CLOUDINARY_ICONS["notion.svg"]
                );
              }}
            />
            <span>{t.name}</span>
          </div>
        ))}
      </div>

      {url && (
        <a href={url} target="_blank" rel="noreferrer" className="project-link">
          {urlType}
        </a>
      )}
    </div>
  );
};

export default function Projects({ current, onNav }) {
  const projects = [
    {
      img: "https://res.cloudinary.com/dx4gymyem/image/upload/v1763045067/Weather_App_oge53z.png",
      title: "Weather App",
      desc: "A web application that provides real-time weather updates and forecasts.",
      tech: [
        { icon: "HTML5.svg", name: "HTML5" },
        { icon: "CSS3.svg", name: "CSS3" },
        { icon: "JavaScript.svg", name: "JavaScript" },
        { icon: "AccuWeather.svg", name: "AccuWeather API" },
      ],
      url: "https://oliveirahambaena.github.io/WeatherApp/",
    },
    {
      img: "https://res.cloudinary.com/dx4gymyem/image/upload/v1763045025/Pro_Empowerment_Namibia_Network_ia3q2e.png",
      title: "Pro Empowerment Namibia Network",
      desc: "A website for a tutoring company based in Windhoek, Namibia, offering foreign and local language tutoring services.",
      features:
        "Student intake form for applications, meeting scheduling form with email submission, about section with company description and staff details, Google Business registration and domain setup, custom email address configuration.",
      tech: [
        { icon: "wordpress.svg", name: "WordPress" },
        { icon: "HTML5.svg", name: "HTML5" },
      ],
      url: "https://proempowermentnamibianetwork.org/",
    },
    {
      img: "https://res.cloudinary.com/dx4gymyem/image/upload/v1763045066/Traffic_Light_Simulation_fbcct0.png",
      title: "Traffic Light Simulation",
      desc: "A simulation of a traffic light system that changes colors (red, yellow, green) after a set period, mimicking real-world traffic light behavior.",
      tech: [
        { icon: "HTML5.svg", name: "HTML5" },
        { icon: "CSS3.svg", name: "CSS3" },
        { icon: "JavaScript.svg", name: "JavaScript" },
      ],
      url: "https://oliveirahambaena.github.io/TrafficLights/",
    },
    {
      img: "https://res.cloudinary.com/dx4gymyem/image/upload/v1763045050/Traffic_Control_Game_srk2py.png",
      title: "Traffic Control Game",
      desc: "A traffic avoidance game where the player controls a car using arrow keys. The goal is to avoid other cars, earning points for each successful dodge. The game becomes more challenging as the speed increases with higher scores.",
      tech: [{ icon: "Java.svg", name: "Java" }],
      url: "https://github.com/OliveiraHambaena/my-coding-projects/tree/main/traffic%20control%20game",
      urlType: "GitHub Code",
    },
    {
      img: "https://res.cloudinary.com/dx4gymyem/image/upload/v1763045024/Login_and_Registration_System_b4fhrb.png",
      title: "Login and Registration System",
      desc: "A simple system for user registration and login. Users can register with their details and log in to access a protected homepage.",
      tech: [
        { icon: "PHP.svg", name: "PHP" },
        { icon: "MySQL.svg", name: "MySQL" },
        { icon: "HTML5.svg", name: "HTML5" },
        { icon: "CSS3.svg", name: "CSS3" },
        { icon: "JavaScript.svg", name: "JavaScript" },
      ],
      url: "https://github.com/OliveiraHambaena/my-coding-projects/tree/main/Login",
      urlType: "GitHub Code",
    },
    {
      img: "https://res.cloudinary.com/dx4gymyem/image/upload/v1763045025/Movie_App_talwys.png",
      title: "Movie App",
      desc: "A React-based movie application that allows users to browse popular movies, search for specific movies, manage a list of their favorite movies, and watch trailers for each movie you click.",
      tech: [
        { icon: "React.svg", name: "React" },
        { icon: "Vite.js.svg", name: "Vite" },
        { icon: "react-router-icon.svg", name: "React Router" },
        { icon: "tmdb-icon.svg", name: "TMDb API" },
        { icon: "youtube.svg", name: "YouTube API" },
        { icon: "CSS3.svg", name: "CSS" },
      ],
      url: "https://movie-app-ten-beta.vercel.app/",
    },
  ];

  return (
    <section className="page projects">
      <PageNav current={current} onNav={onNav} />
      <div className="content-right">
        <h1>Projects</h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
