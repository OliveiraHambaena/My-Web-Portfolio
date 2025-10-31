import React, { useState } from "react";
import PageNav from "../components/PageNav";

/*
  ICON_CANDIDATES: for each logical key provide an ordered list of possible filenames
  (in public/old/icons). The Icon component will try each candidate and fall back to notion.svg.
*/
const ICON_CANDIDATES = {
  java: ["java.svg", "Java.svg", "devicon-java-plain.svg"],
  javascript: [
    "javascript.svg",
    "JavaScript.svg",
    "devicon-javascript-plain.svg",
    "js.svg",
  ],
  typescript: [
    "typescript.svg",
    "TypeScript.svg",
    "devicon-typescript-plain.svg",
  ],
  python: ["python.svg", "Python.svg", "devicon-python-plain.svg"],
  kotlin: ["kotlin.svg", "Kotlin.svg"],
  html5: ["html5.svg", "HTML5.svg", "devicon-html5-plain.svg"],
  css3: ["css3.svg", "CSS3.svg", "devicon-css3-plain.svg"],
  php: ["php.svg", "PHP.svg", "devicon-php-plain.svg"],
  react: ["react.svg", "react-original.svg", "React.svg"],
  "react-native": ["react-native.svg", "react-native-original.svg"],
  net: [".NET.svg", "dotnet.svg", "dot-net.svg", "dotnet-color.svg"],
  csharp: ["csharp.svg", "CSharp.svg"], // Updated to use renamed file
  aws: ["AWS.svg", "aws.svg"],
  docker: ["Docker.svg", "docker.svg"],
  kubernetes: ["Kubernetes.svg", "kubernetes.svg", "k8s.svg"],
  zapier: ["zapier-icon.svg", "zapier.svg"],
  sqlite: ["SQLite.svg", "sqlite.svg"],
  unity: ["Unity.svg", "unity.svg"],
  "unreal-engine": ["Unreal-Engine.svg", "unreal-engine.svg", "unreal.svg"],
  blender: ["Blender.svg", "blender.svg"],
  postgresql: ["PostgresSQL.svg", "PostgreSQL.svg", "postgres.svg"],
  postman: ["postman.svg", "Postman.svg"],
  "github-codespaces": [
    "GitHub-Codespaces.svg",
    "github-codespaces.svg",
    "codespaces.svg",
  ],
  nextjs: ["Next.js.svg", "next.svg", "Nextjs.svg"],
  nodejs: ["Node.js.svg", "node.svg", "NodeJS.svg"],
  postman_alt: ["Postman.svg"],
  deepseek: ["deepseek.svg", "deepseek-color.svg"],
  notion: ["notion.svg", "notion-color.svg"],
  openai: ["openai.svg", "openai-color.svg"],
  flask: ["Flask.svg", "flask.svg"],
  bootstrap: ["bootstrap.svg", "Bootstrap.svg"],
  git: ["git.svg", "Git.svg", "git-icon.svg"],
  ballerina: ["Ballerina.svg", "ballerina.svg"], // ensure correct casing
  // fallback will be notion.svg if none of the candidates load
};

const ICON_GRID_STYLE = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "12px",
  alignItems: "center",
};

const ICON_ITEM_STYLE = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "88px",
  textAlign: "center",
  fontSize: "0.85rem",
};

const ICON_IMG_STYLE = {
  width: "48px",
  height: "48px",
  objectFit: "contain",
  marginBottom: "6px",
};

function IconItem({ keyName, label }) {
  const candidates = ICON_CANDIDATES[keyName] || [keyName + ".svg"];
  const [pos, setPos] = useState(0);

  // currentSrc derived from state so updates immediately
  const currentSrc = encodeURI(`/old/icons/${candidates[pos] || "notion.svg"}`);

  return (
    <div className="icon-item cursor-target" style={ICON_ITEM_STYLE}>
      <img
        key={pos + "-" + keyName} // force remount when we advance candidate
        src={currentSrc}
        alt={label}
        className="icon"
        style={ICON_IMG_STYLE}
        onError={(e) => {
          // try next candidate if available, else fallback to notion.svg
          const next = pos + 1;
          if (next < candidates.length) {
            setPos(next);
          } else if (currentSrc !== "/old/icons/notion.svg") {
            // final fallback
            setPos(candidates.length); // will make currentSrc point to notion.svg
          } else {
            // nothing else to do
            e.currentTarget.style.display = "none";
          }
        }}
        loading="lazy"
      />
      <span>{label}</span>
    </div>
  );
}

// Add social links component (uses same cursor-target class so TargetCursor will react)
const SOCIALS = [
  { id: "twitter", label: "Twitter/X", url: "https://x.com/The1stOliveira" },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/oliveira-hambaena-18580b275/",
  },
  { id: "github", label: "GitHub", url: "https://github.com/OliveiraHambaena" },
];

function SocialLinks() {
  return (
    <div
      className="social-links"
      style={{ display: "flex", gap: 16, marginTop: 12 }}
    >
      {SOCIALS.map((s) => (
        <a
          key={s.id}
          className="social-link cursor-target"
          href={s.url}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-block",
            padding: "8px 12px",
            borderRadius: 8,
            background: "rgba(0,0,0,0.04)",
            color: "inherit",
            textDecoration: "none",
            fontWeight: 600,
            boxShadow: "0 1px 0 rgba(0,0,0,0.06)",
          }}
        >
          {s.label}
        </a>
      ))}
    </div>
  );
}

export default function About({ current, onNav }) {
  return (
    <section className="page about">
      <PageNav current={current} onNav={onNav} />
      <div className="content-right">
        <section className="about-section">
          <h1 className="about-title">About Me</h1>

          <div className="about-content">
            <p>
              Hi, I'm <span className="highlight">Oliveira Hambaena</span>, a
              passionate 3rd-year Software Development student at the Namibia
              University of Science and Technology.
            </p>

            <p>
              My tech journey began as a curious kid exploring every setting on
              electronic devices, which evolved into expertise in{" "}
              <span className="highlight">hardware repair</span>,{" "}
              <span className="highlight">software troubleshooting</span>, and{" "}
              <span className="highlight">system optimization</span>. I've
              turned this passion into a service, helping others with their tech
              challenges.
            </p>

            <p>
              Beyond technical skills, I thrive in{" "}
              <span className="highlight">creative domains</span> like VFX, game
              design, and graphic design. I believe the best solutions merge
              technical precision with aesthetic appeal.
            </p>
          </div>

          <div className="tech-stacks">
            <div className="tech-stack">
              <h3>
                <span className="icon-emoji">{"</> "}</span> Languages &
                Frameworks
              </h3>
              <div className="icon-grid" style={ICON_GRID_STYLE}>
                <IconItem keyName="java" label="Java" />
                <IconItem keyName="javascript" label="JavaScript" />
                <IconItem keyName="typescript" label="TypeScript" />
                <IconItem keyName="python" label="Python" />
                <IconItem keyName="kotlin" label="Kotlin" />
                <IconItem keyName="html5" label="HTML5" />
                <IconItem keyName="css3" label="CSS3" />
                <IconItem keyName="php" label="PHP" />
                <IconItem keyName="react" label="React" />
                <IconItem keyName="react-native" label="React Native" />
                <IconItem keyName="net" label=".NET" />
                <IconItem keyName="csharp" label="C#" />
                <IconItem keyName="flask" label="Flask" />
                <IconItem keyName="bootstrap" label="Bootstrap" />
                <IconItem keyName="ballerina" label="Ballerina" />
              </div>
            </div>

            <div className="tech-stack">
              <h3>
                <span className="icon-emoji">{"🧰 "}</span> Tools & Platforms
              </h3>
              <div className="icon-grid" style={ICON_GRID_STYLE}>
                <IconItem keyName="git" label="Git / GitHub" />
                <IconItem
                  keyName="github-codespaces"
                  label="GitHub Codespaces"
                />
                <IconItem keyName="aws" label="AWS" />
                <IconItem keyName="docker" label="Docker" />
                <IconItem keyName="kubernetes" label="Kubernetes" />
                <IconItem keyName="postman" label="Postman" />
                <IconItem keyName="zapier" label="Zapier" />
                <IconItem keyName="nextjs" label="Next.js" />
                <IconItem keyName="nodejs" label="Node.js" />
              </div>
            </div>

            <div className="tech-stack">
              <h3>
                <span className="icon-emoji">{"🗄️ "}</span> Systems & Game Dev
              </h3>
              <div className="icon-grid" style={ICON_GRID_STYLE}>
                <IconItem keyName="postgresql" label="PostgreSQL" />
                <IconItem keyName="sqlite" label="SQLite" />
                <IconItem keyName="openai" label="OpenAI API" />
                <IconItem keyName="deepseek" label="DeepSeek API" />
                <IconItem keyName="unity" label="Unity" />
                <IconItem keyName="unreal-engine" label="Unreal Engine" />
                <IconItem keyName="blender" label="Blender" />
              </div>
            </div>
          </div>

          <div className="experience-education">
            <div className="exp-edu-item">
              <h3>
                <span className="icon-emoji">{"💼 "}</span> Experience
              </h3>
              <p>
                <strong>Computer Hardware Specialist</strong>
              </p>
              <p className="date">DX Trading Pty | 2023-2024</p>
              <p>
                Diagnosed and repaired hardware/software issues across
                platforms.
              </p>

              <p>
                <strong>Freelance Web Developer</strong>
              </p>
              <p className="date">Pro Empowerment Namibia | 2024</p>
              <p>
                Built and optimized WordPress websites with SEO integration.
              </p>
            </div>

            <div className="exp-edu-item">
              <h3>
                <span className="icon-emoji">{"🎓 "}</span> Education
              </h3>
              <p>
                <strong>Bachelor of Computer Science</strong>
              </p>
              <p className="date">
                Namibia University of Science and Technology | 2023-Present
              </p>
              <p>
                Specializing in Software Development (algorithms, databases,
                web).
              </p>
            </div>
          </div>

          {/* New: Connect / Social links */}
          <div className="connect-section" style={{ marginTop: 28 }}>
            <h3 style={{ marginBottom: 8 }}>
              <span className="icon-emoji">{"🔗 "}</span> Connect
            </h3>
            <p style={{ margin: 0, color: "var(--muted, #666)" }}>
              Follow me or check my projects on these platforms:
            </p>
            <SocialLinks />
          </div>
        </section>
      </div>
    </section>
  );
}
