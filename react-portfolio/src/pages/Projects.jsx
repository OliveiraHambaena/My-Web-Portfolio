import React from "react";
import PageNav from "../components/PageNav";

const TECH_ICON_STYLE = {
  width: "48px",
  height: "48px",
  objectFit: "contain",
  marginBottom: "6px",
};

const ProjectCard = ({
  img,
  title,
  desc,
  features,
  tech,
  url,
  urlType = "Live Website",
}) => (
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

    <p className="project-description" style={{ textDecoration: "underline" }}>
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
            src={`/old/icons/${t.icon}`}
            alt={`${t.name} Logo`}
            className="tech-icon"
            style={TECH_ICON_STYLE}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/old/icons/notion.svg";
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

export default function Projects({ current, onNav }) {
  const projects = [
    {
      img: "/old/projects/Weather App.png",
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
      img: "/old/projects/Pro Empowerment Namibia Network.png",
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
      img: "/old/projects/Traffic Light Simulation (1).png",
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
      img: "/old/projects/Traffic Control Game.png",
      title: "Traffic Control Game",
      desc: "A traffic avoidance game where the player controls a car using arrow keys. The goal is to avoid other cars, earning points for each successful dodge. The game becomes more challenging as the speed increases with higher scores.",
      tech: [{ icon: "Java.svg", name: "Java" }],
      url: "https://github.com/OliveiraHambaena/my-coding-projects/tree/main/traffic%20control%20game",
      urlType: "GitHub Code",
    },
    {
      img: "/old/projects/Login and Registration System.png",
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
      img: "/old/projects/Movie App.png",
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
