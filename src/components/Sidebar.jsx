import React, { useEffect, useRef, useState } from "react";

export default function Sidebar({ open, onClose, onNav, current }) {
  const roles = [
    "Fullstack web developer",
    "Software Engineer",
    "software Developer & Designer",
    "graphic designer",
    "database administrator",
    "UI/UX developer",
    "Automation specialist",
    "3D modeler", // corrected spelling from "modeller"
  ];

  const [typed, setTyped] = useState("");
  const typingIndex = useRef(0);
  const charIndex = useRef(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const typingSpeed = 80;
    const eraseSpeed = 40;

    function type() {
      const word = roles[typingIndex.current];
      if (charIndex.current < word.length) {
        charIndex.current += 1;
        // deterministically set the substring (avoid relying on previous state)
        setTyped(word.slice(0, charIndex.current));
        timeoutRef.current = setTimeout(type, typingSpeed);
      } else {
        timeoutRef.current = setTimeout(erase, 1200);
      }
    }

    function erase() {
      const word = roles[typingIndex.current];
      if (charIndex.current > 0) {
        charIndex.current -= 1;
        setTyped(word.slice(0, charIndex.current));
        timeoutRef.current = setTimeout(erase, eraseSpeed);
      } else {
        typingIndex.current = (typingIndex.current + 1) % roles.length;
        timeoutRef.current = setTimeout(type, 400);
      }
    }

    type();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      <div className="sidebar-inner">
        <nav className="desktop-nav">
          <button
            onClick={() => onNav("home")}
            className={current === "home" ? "active" : ""}
          >
            Home
          </button>
          <button
            onClick={() => onNav("about")}
            className={current === "about" ? "active" : ""}
          >
            About Me
          </button>
          <button
            onClick={() => onNav("projects")}
            className={current === "projects" ? "active" : ""}
          >
            Projects
          </button>
          <button
            onClick={() => onNav("contact")}
            className={current === "contact" ? "active" : ""}
          >
            Contact
          </button>
        </nav>

        <div className="hero-compact">
          <p className="intro">Hi my name is</p>
          <h2 className="name">OLIVEIRA HAMBAENA</h2>
          <p className="sub">
            I am a<br />
            <span className="typing" aria-label="rotating roles">
              {typed}
              <span className="cursor" />
            </span>
          </p>
        </div>

        <nav className="sidebar-nav">{/* ...existing nav items... */}</nav>

        <div
          className="sidebar-socials"
          style={{
            marginTop: "auto",
            padding: "20px",
            display: "flex",
            gap: "10px",
            flexDirection: "column",
          }}
        >
          <a
            className="sidebar-social cursor-target"
            href="https://x.com/The1stOliveira"
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "8px 10px",
              borderRadius: 8,
              textDecoration: "none",
              color: "inherit",
              background: "rgba(0,0,0,0.03)",
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Twitter/X
          </a>

          <a
            className="sidebar-social cursor-target"
            href="https://www.linkedin.com/in/oliveira-hambaena-18580b275/"
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "8px 10px",
              borderRadius: 8,
              textDecoration: "none",
              color: "inherit",
              background: "rgba(0,0,0,0.03)",
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            LinkedIn
          </a>

          <a
            className="sidebar-social cursor-target"
            href="https://github.com/OliveiraHambaena"
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "8px 10px",
              borderRadius: 8,
              textDecoration: "none",
              color: "inherit",
              background: "rgba(0,0,0,0.03)",
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            GitHub
          </a>
        </div>

        <a
          className="resume"
          href="Public\old\resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Download My Resume
        </a>

        <button
          className="close-btn"
          onClick={onClose}
          aria-label="Close sidebar"
        >
          ✕
        </button>
      </div>
    </aside>
  );
}
