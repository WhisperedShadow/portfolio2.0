"use client";

import SecondaryLinks from "@/components/SecondaryLinks/SecondaryLinks";
import TertiaryLinks from "@/components/TertiaryLinks/TertiaryLinks";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

const projects = [
  {
    id: "env-porter",
    title: "Env Porter",
    tagline: "API keys and environment variable manager",
    description:
      "A developer-focused utility that helps organize API keys and environment variables efficiently, allowing developers to export clean and reusable .env files across multiple projects with ease.",
    features: [
      "Structured environment variable management",
      "One-click .env export",
      "Developer-friendly UX",
    ],
    techStack: ["Flask", "Pyton", "MySQL", "Flask-Auth"],
    category: "Featured",
    liveUrl: "https://env-porter.vercel.app",
    githubUrl: "https://github.com/WhisperedShadow/EnvPorter",
    image: "/projects/envPorter.png",
  },
  {
    id: "flask-cli",
    title: "FlaskCLI",
    tagline: "Command-line tool to scaffold and manage Flask projects",
    description:
      "A CLI tool that simplifies Flask development by generating project structure, managing dependencies, creating routes, and running applications from the terminal.",
    commands: [
      "init – initialize a new Flask project",
      "install <deps> – install project dependencies",
      "route <method> <path> – add a new route to app.py",
      "run – run the Flask application",
      "help – show CLI usage information",
    ],
    features: [
      "Fast Flask project scaffolding",
      "Route generation via CLI commands",
      "Dependency installation support",
      "Developer-friendly terminal workflow",
    ],
    techStack: ["Node.js", "JavaScript", "Flask", "Python", "CLI"],
    category: "Developer Tool",
    liveUrl: "",
    githubUrl: "https://github.com/WhisperedShadow/flaskcli",
    image: "/projects/flaskcli.png",
  },
  {
    id: "zenith25",
    title: "Zenith25",
    tagline: "CSE department symposium portfolio",
    description:
      "A modern portfolio website designed for a college-level technical symposium, focusing on clear event information, responsive layout, and smooth navigation for participants and organizers.",
    features: [
      "Event-focused layout",
      "Responsive design",
      "Clean information hierarchy",
    ],
    techStack: ["React", "MySQL", "Flask", "Gemini AI"],
    category: "Featured",
    liveUrl: "https://zenith25.vercel.app",
    githubUrl: "https://github.com/WhisperedShadow/zenith",
    image: "/projects/zenith25.png",
  },

  {
    id: "truth-or-dare-ai",
    title: "Risk or Reveal",
    tagline: "AI-powered party game with smart player selection",
    description:
      "A modern Truth or Dare web game with multiple play modes, including random player selection and AI-generated questions and dares.",
    gameModes: [
      "Random player selection (solo picker)",
      "AI-generated truth questions and dares",
    ],
    features: [
      "Two gameplay modes",
      "Dynamic AI-generated content",
      "Responsive UI built for mobile play",
      "Fast interactions using Next.js",
    ],
    techStack: ["Next.js", "React", "AI APIs", "JavaScript"],
    category: "Featured",
    liveUrl: "https://reveal-or-risk.vercel.app/",
    githubUrl: "https://github.com/WhisperedShadow/truth-or-dare",
    image: "/projects/ror.png",
  },
  {
    id: "works-and-tasks",
    title: "Works and Tasks",
    tagline: "Simple to-do app for managing daily work",
    description:
      "A lightweight to-do application to organize daily works and tasks with persistent storage using the browser.",
    features: [
      "Add, edit, and delete tasks",
      "Mark tasks as completed",
      "Data persistence using LocalStorage",
      "Minimal and distraction-free UI",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    category: "Other",
    liveUrl: "https://works-and-tasks.vercel.app/",
    githubUrl: "https://github.com/WhisperedShadow/to-do",
    image: "/projects/works.png",
  },

  {
    id: "pic-spy",
    title: "Pic Spy",
    tagline: "Image analysis using Google Lens-style matching",
    description:
      "Analyzes images and fetches related information using image recognition techniques.",
    features: [
      "Image upload and analysis",
      "Backend-driven processing",
      "Practical computer vision use case",
    ],
    techStack: ["Flask", "Python", "Google Lens", "JavaScript"],
    category: "Other",
    liveUrl: "https://pic-spy.vercel.app",
    githubUrl: "https://github.com/WhisperedShadow/PicSpy",
    image: "/projects/pic-spy.png",
  },
  {
    id: "luminare-digital",
    title: "Luminare Digital",
    tagline: "Digital agency website with backend integration",
    description:
      "A full-stack agency website with contact handling and database storage.",
    features: [
      "Dynamic backend with Flask",
      "Email integration",
      "Database-driven contact form",
    ],
    techStack: ["Flask", "MySQL", "JavaScript", "Mailjet"],
    category: "Other",
    liveUrl: "https://luminare-digital.vercel.app/",
    githubUrl: "https://github.com/WhisperedShadow/Luminare-Digital",
    image: "/projects/luminare.png",
  },
  {
    id: "friendo",
    title: "Friendo",
    tagline: "Anonymous chat with strangers",
    description:
      "A lightweight platform that allows users to chat anonymously in real time.",
    features: [
      "Anonymous real-time chat",
      "Simple onboarding",
      "Minimal UI for focus",
    ],
    techStack: ["React", "JavaScript", "Firebase"],
    category: "Other",
    liveUrl: "https://friendo-two.vercel.app",
    githubUrl: "https://github.com/WhisperedShadow/Friendo",
    image: "/projects/friendo.png",
  },
];

const Page = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [imageError, setImageError] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleImageError = (projectId: string) => {
    setImageError((prev) => ({ ...prev, [projectId]: true }));
  };

  return (
    <section className={styles.projects}>
      <div className={styles.heroSection}>
        <h1 className={styles.projectsHeading}>My Projects</h1>
        <p className={styles.projectsPara}>
          A collection of my recent work, ranging from AI-powered platforms to
          utility tools and full-stack applications. Each project represents a
          unique challenge and learning opportunity.
        </p>
      </div>

      <div className={styles.container}>
        {projects.map((project, index) => (
          <article
            key={project.id}
            className={styles.project}
            style={{ "--index": index } as React.CSSProperties}
          >
            <div className={styles.imageContainer}>
              {!imageError[project.id] && (
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className={styles.image}
                  loading={index < 3 ? "eager" : "lazy"}
                  onError={() => handleImageError(project.id)}
                />
              )}
              {project.category && (
                <span
                  className={`${styles.category} ${
                    styles[project.category.toLowerCase()]
                  }`}
                >
                  {project.category}
                </span>
              )}
            </div>

            <div className={styles.content}>
              <header className={styles.header}>
                <h2 className={styles.title}>{project.title}</h2>
                <code className={styles.tagline}>{project.tagline}</code>
              </header>

              <p className={styles.description}>{project.description}</p>

              {project.features && project.features.length > 0 && (
                <div className={styles.features}>
                  <h4 className={styles.featuresTitle}>Key Features:</h4>
                  <ul className={styles.featuresList}>
                    {project.features.map((feature, i) => (
                      <li key={i} className={styles.featureItem}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.techStack && project.techStack.length > 0 && (
                <div className={styles.techStack}>
                  <h4 className={styles.techTitle}>Tech Stack:</h4>
                  <div className={styles.techTags}>
                    {project.techStack
                      .slice(0, isMobile ? 3 : 5)
                      .map((tech, i) => (
                        <span key={i} className={styles.techTag}>
                          {tech}
                        </span>
                      ))}
                    {isMobile && project.techStack.length > 3 && (
                      <span className={styles.techTag}>
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              )}

              <div className={styles.links}>
                {project.liveUrl ? (
                  <SecondaryLinks
                    label={isMobile ? "Live Site" : "Visit Live Site"}
                    link={project.liveUrl}
                    dowloadble={false}
                  />
                ) : (
                  <button className={styles.disabledLink} disabled>
                    {isMobile ? "Coming Soon" : "Coming Soon"}
                  </button>
                )}

                {project.githubUrl ? (
                  <TertiaryLinks
                    label={isMobile ? "Code" : "View Code"}
                    link={project.githubUrl}
                    dowloadble={false}
                  />
                ) : (
                  <button className={styles.disabledLink} disabled>
                    {isMobile ? "Private" : "Code Private"}
                  </button>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Page;
