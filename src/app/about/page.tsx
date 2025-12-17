"use client";

import { useRef, useState, useLayoutEffect } from "react";
import SecondaryLinks from "@/components/SecondaryLinks/SecondaryLinks";
import TertiaryLinks from "@/components/TertiaryLinks/TertiaryLinks";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { TextPlugin, ScrollTrigger } from "gsap/all";
import styles from "./page.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

const contact_heading: string[] = [
  "Let's connect...",
  "Have a project ?",
  "Just wanna say hi ?",
  "Looking for collaboration ?",
  "Want to work together ?",
];

const Page = () => {
  // Refs for GSAP animations
  const introRef = useRef<HTMLElement>(null);
  const strengthRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const [contactHeadingIndex, setcontactHeadingIndex] = useState(0);
  const contactHeadingRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.to(contactHeadingRef.current, {
        text: contact_heading[contactHeadingIndex],
        duration: contact_heading[contactHeadingIndex].length / 10,
      });
      tl.to(contactHeadingRef.current, { duration: 3 });
      tl.to(contactHeadingRef.current, {
        text: "",
        duration: 1,
        onComplete: () =>
          setcontactHeadingIndex((prev) => (prev + 1) % contact_heading.length),
      });
    });

    return () => ctx.revert();
  }, [contactHeadingIndex, setcontactHeadingIndex]);

  // Categories of skills
  const skillCategories = [
    {
      name: "Frontend - Core",
      skills: [
        "HTML",
        "CSS / SCSS",
        "JavaScript / TypeScript",
        "Responsive Design",
      ],
    },
    {
      name: "Frameworks & Animation",
      skills: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "GSAP",
        "Three.js",
      ],
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express.js", "Flask", "REST APIs", "Authentication"],
    },
    {
      name: "Databases",
      skills: ["MongoDB", "MySQL", "SQL", "Firebase"],
    },
    {
      name: "Languages",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C (Basics)"],
    },
    {
      name: "Tools & Platforms",
      skills: [
        "Git",
        "GitHub",
        "Vercel",
        "Render",
        "AWS (Basics)",
        "Figma",
        "CLI Tools",
      ],
    },
  ];

  const strengths = [
    {
      title: "Problem Solver",
      description: "Breaking complex challenges into elegant solutions",
      icon: "🧩",
    },
    {
      title: "Fast Learner",
      description: "Quick to adapt to new technologies and frameworks",
      icon: "🚀",
    },
    {
      title: "Detail Oriented",
      description: "Focused on clean code and pixel-perfect implementations",
      icon: "✨",
    },
    {
      title: "Collaborative",
      description: "Thrives in team environments and open communication",
      icon: "🤝",
    },
  ];

  return (
    <section>
      {/* Intro Section */}
      <section className={styles.intro} ref={introRef}>
        <div className={styles.intro_content}>
          <h1 className={styles.intro_title}>I&apos;m Durai,</h1>
          <p className={styles.intro_text}>
            - A <span>Full-Stack Developer</span> and <span>CSE student</span>{" "}
            who enjoys building clean, fast, and reliable digital experiences. I
            focus on turning concepts into products that feel effortless to use.{" "}
            <br />
            <br />
          </p>{" "}
          <code>
            <i>
              <q>
                Curiosity drives what I build. <br />
                Consistency shapes how I build it.
              </q>
            </i>
          </code>
        </div>
        <div className={styles.intro_image}>
          <motion.img
            src="/home/hero.png"
            alt="Durai Profile Picture"
            initial={{ y: 100, rotateZ: -75 }}
            animate={{ y: 0, opacity: 1, scale: 1, rotateZ: 5 }}
            transition={{ duration: 0.3 }}
            whileHover={{ rotateZ: 0 }}
          />
        </div>
      </section>

      {/* Strengths Section */}
      <section className={styles.strength} ref={strengthRef}>
        <div className={styles.container}>
          <h1>My Strengths</h1>
          <div className={styles.strength_grid}>
            {strengths.map((item, i) => (
              <motion.div
                key={i}
                className={styles.strength_card}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <span>{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={styles.skills} ref={skillsRef}>
        <div className={styles.container}>
          {" "}
          <h1>My Skills</h1>
          <div className={styles.skills_cards}>
            {skillCategories.map((skill, i) => (
              <div className={styles.skillCard} key={i}>
                <span className={styles.title}>{skill.name}</span>
                <div className={styles.tags}>
                  <ul className={styles.tag}>
                    {skill.skills.map((s, ii) => (
                      <li className={styles.tagName} key={ii}>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contact}>
        <h1 className={styles.contact_heading} ref={contactHeadingRef}></h1>
        <p className={styles.contact_para}>
          Whether you have a question, a project idea, or just want to say hi,
          my inbox is always open. I look forward to hearing from you!
        </p>
        <div className={styles.contact_btns}>
          <TertiaryLinks label="Conact Me" link="/contact" dowloadble={false} />
          <SecondaryLinks
            label="See My Resume"
            link="/Durai_Pon_Singh_Resume.pdf"
            dowloadble={true}
          />
        </div>
      </section>
    </section>
  );
};

export default Page;
