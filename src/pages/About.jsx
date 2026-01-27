import React from "react";
import PageNav from "../components/PageNav";

// Cloudinary icons mapping - using your uploaded icons
const CLOUDINARY_ICONS = {
  java: "https://res.cloudinary.com/dx4gymyem/image/upload/v1763039663/Java_sgzkc0.svg",
  javascript:
    "https://res.cloudinary.com/dx4gymyem/image/upload/v1763039663/JavaScript_g3awzk.svg",
  typescript:
    "https://res.cloudinary.com/dx4gymyem/image/upload/v1763039677/TypeScript_shvrif.svg",
  python:
    "https://res.cloudinary.com/dx4gymyem/image/upload/v1763039673/Python_lo3hxm.svg",
  kotlin:
    "https://res.cloudinary.com/dx4gymyem/image/upload/v1763039665/Kotlin_oucmei.svg",
  html5:
    "https://res.cloudinary.com/dx4gymyem/image/upload/v1763039663/HTML5_mi8e0l.svg",
  css3: "https://res.cloudinary.com/dx4gymyem/image/upload/v1763039660/CSS3_a11wlw.svg",
  php: "https://res.cloudinary.com/dx4gymyem/image/upload/v1763039673/PHP_xbcamj.svg",
  react:
    "https://res.cloudinary.com/dx4gymyem/image/upload/v1763039674/React_vjzfoe.svg",
  "react-native":
    "https://res.cloudinary.com/dx4gymyem/image/upload/v1763039674/React_vjzfoe.svg", // Using React icon as fallback
  net: "https://res.cloudinary.com/dx4gymyem/image/upload/v1763039658/.NET_anjdrl.svg",
  csharp:
    "https://res.cloudinary.com/dx4gymyem/image/upload/v1763039660/C-Sharp_tdcqp3.svg",
  aws: "https://res.cloudinary.com/dx4gymyem/image/upload/v1763039658/AWS_vy9pbo.svg",
  docker:
    "https://res.cloudinary.com/dx4gymyem/image/upload/v1763039662/Docker_vdv831.svg",
  kubernetes:
    "https://res.cloudinary.com/dx4gymyem/image/upload/v1763039665/Kubernetes_fagx3x.svg",
  zapier:
    "https://res.cloudinary.com/dx4gymyem/image/upload/v1763039687/zapier-icon_xlb0um.svg",
  sqlite:
    "https://res.cloudinary.com/dx4gymyem/image/upload/v1763039675/SQLite_cvatdz.svg",
  unity:
    "https://res.cloudinary.com/dx4gymyem/image/upload/v1763039685/Unity_mkixdy.svg",
  "unreal-engine":
    "https://res.cloudinary.com/dx4gymyem/image/upload/v1763039686/Unreal-Engine_lj9fsh.svg",
  blender:
    "https://res.cloudinary.com/dx4gymyem/image/upload/v1763039658/Blender_bskda6.svg",
  postgresql:
    "https://res.cloudinary.com/dx4gymyem/image/upload/v1763039673/PostgresSQL_wpeqv4.svg",
  postman:
    "https://res.cloudinary.com/dx4gymyem/image/upload/v1763039673/Postman_snxyzh.svg",
  "github-codespaces":
    "https://res.cloudinary.com/dx4gymyem/image/upload/v1763039663/GitHub-Codespaces_qt04bo.svg",
  nextjs:
    "https://res.cloudinary.com/dx4gymyem/image/upload/v1763039666/Next.js_xeygaf.svg",
  nodejs:
    "https://res.cloudinary.com/dx4gymyem/image/upload/v1763039668/Node.js_inyfe8.svg",
  deepseek:
    "https://res.cloudinary.com/dx4gymyem/image/upload/v1763039661/deepseek_drw1fj.svg",
  notion:
    "https://res.cloudinary.com/dx4gymyem/image/upload/v1763039671/notion_jriuh5.svg",
  openai:
    "https://res.cloudinary.com/dx4gymyem/image/upload/v1763039672/openai_b2s5ns.svg",
  flask:
    "https://res.cloudinary.com/dx4gymyem/image/upload/v1763039662/Flask_dqbr25.svg",
  bootstrap:
    "https://res.cloudinary.com/dx4gymyem/image/upload/v1763039658/Bootstrap_onuxyg.svg",
  git: "https://res.cloudinary.com/dx4gymyem/image/upload/v1763039662/Git_ztelou.svg",
  ballerina:
    "https://res.cloudinary.com/dx4gymyem/image/upload/v1763039658/Ballerina_zdfgek.svg",
  // Fallback icon
  fallback:
    "https://res.cloudinary.com/dx4gymyem/image/upload/v1763039671/notion_jriuh5.svg",
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

// Optimize Cloudinary URLs for better performance
const optimizeUrl = (url) => {
  return url.replace("/upload/", "/upload/f_auto,q_auto,w_64,h_64/");
};

function IconItem({ keyName, label }) {
  const iconUrl = CLOUDINARY_ICONS[keyName] || CLOUDINARY_ICONS.fallback;
  const optimizedUrl = optimizeUrl(iconUrl);

  return (
    <div className="icon-item cursor-target" style={ICON_ITEM_STYLE}>
      <img
        src={optimizedUrl}
        alt={label}
        className="icon"
        style={ICON_IMG_STYLE}
        onError={(e) => {
          // Fallback to notion icon if image fails to load
          e.target.src = optimizeUrl(CLOUDINARY_ICONS.fallback);
        }}
        loading="lazy"
      />
      <span>{label}</span>
    </div>
  );
}

// Social links component
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

            <h3>Who I am</h3>
            <p>I am a results-oriented technologist based in Windhoek, Namibia, currently completing my degree in Computer Science at NUST. My journey in tech is driven by a simple philosophy: <strong>if a process can be optimized, it should be.</strong> Whether I am writing code for a multi-tenant platform or troubleshooting enterprise-level network hardware, I approach every task with the same endurance and focus I bring to my life as a marathon runner.</p>

            <h3>What I do</h3>
            <p>My expertise spans three core pillars of the modern tech landscape.</p>
            <p>
              <strong>Software Engineering & AI:</strong> I build modern web
              applications using Next.js, React, and TypeScript, with a strong
              backend foundation in PHP and SQL. I am particularly interested in
              the intersection of AI and productivity, having developed custom
              WhatsApp AI agents and Python-based automation tools to streamline
              complex workflows. I am currently expanding my mobile development
              repertoire by mastering Flutter.
            </p>
            <p>
              <strong>Systems & Infrastructure:</strong> With two years of
              experience as a Computer Hardware Specialist at DX Trading, I am
              "hardware-fluent." I have hands-on experience installing and
              managing CCTV, Access Control, and LAN/WAN networks, giving me a
              holistic understanding of how software interacts with physical
              environments.
            </p>
            <p>
              <strong>Growth & Marketing Strategy:</strong> I believe that great
              tech is useless if no one knows it exists. My experience has
              allowed me to master digital marketing, specifically Email/SMS
              automation and SEO. I treat marketing as a technical challenge,
              using data and algorithmic logic to drive measurable sales and
              engagement.
            </p>

            <h3>The Founder Mentality</h3>
            <p>In 2025, I founded Involv Software Corporation to provide a platform for innovation in the Namibian tech space. Leading Involv has taught me the importance of end-to-end ownership—from initial UI/UX design in Figma to deploying secure, cloud-based architectures on AWS. My latest project, UpTop, serves as a testament to my ability to manage complex, multi-user environments with a focus on data privacy and role-based access.</p>
          
          <h3>Why Me?</h3>
          <p>I don’t just build systems; I build reliability. My background as a Sales Representative has honed my ability to communicate technical concepts to non-technical stakeholders, ensuring that the technology always serves the human objective.

I am a disciplined learner, a team player, and a proactive problem solver. I am currently holding a learner’s license and am actively working toward full mobility to better serve on-site technical needs. When I am not behind a keyboard, you can find me on the road, training for my next marathon—always pushing for the next milestone.</p>
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
                <IconItem keyName="csharp" label="C-Sharp" />
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

              <p><strong>Founder & CEO</strong></p>
              <p className="date">Involv Software Corporation | 2025-Present</p>
              <p>
                Founded and led a software development company focused on building scalable digital solutions. Involv provides a suite of technology services, including bespoke web and software development, digital marketing, automation, and IT support, aimed at driving digital transformation and measurable business growth.
              </p>



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

              <p>
                <strong>Software Developer Intern</strong>
              </p>
              <p className="date">WOW TECHNOLOGIES & MARKETING | 2025</p>
              <p>
                Implemented AI integration into system workflows and automated
                manual tasks to improve efficiency.
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

          {/* Connect / Social links */}
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
