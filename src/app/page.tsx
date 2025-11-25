"use client";
import { gsap } from "gsap";
import { TextPlugin, ScrollTrigger } from "gsap/all";
import { useRef, useEffect, useState, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import styles from "./page.module.css";
import SecondaryLinks from "@/components/SecondaryLinks/SecondaryLinks";
import TertiaryLinks from "@/components/TertiaryLinks/TertiaryLinks";
import Counter from "@/components/Counter/Counter";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const heroSubHeading = [
  "I craft modern, interactive, and dynamic web experiences.",
  "I am exploring AI and Machine Learning.",
];

interface projectsProps {
  title: string;
  description: string;
  image: string;
  link: string;
}
const projectsData: projectsProps[] = [
  {
    title: "Zenith'25 – College Fest Website",
    description:
      "A dynamic college symposium website featuring event schedules, registrations, and highlights. Built with modern web tech for an engaging student experience with seamless event management.",
    link: "https://zenith25.vercel.app/",
    image: "home/projects/zenith.png",
  },
  {
    title: "Env-Porter – Environment Manager",
    description:
      "Developer tool for managing and exporting environment variables as `.env` files. Supports React, Vite and other frameworks to streamline project configuration.",
    link: "https://env-porter.vercel.app/",
    image: "home/projects/envporter.png",
  },
  {
    title: "ConvoZo – AI Chat Platform",
    description:
      "AI-powered web app for real-time conversations. Helps users improve speaking skills through interactive practice sessions and personalized feedback.",
    link: "https://convo-zo.vercel.app/",
    image: "home/projects/convozo.png",
  },
];

const Page = () => {
  const [mobileView, setMobileView] = useState(false);
  const [heroSubHeadingIndex, setHeroSubHeadingIndex] = useState(0);
  const heroSubHeadingRef = useRef(null);
  const heroContentRef = useRef(null);
  const heroImageRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {}, []);
  useEffect(() => {
    const handleResize = () => setMobileView(window.innerWidth < 480);
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // useLayoutEffect(() => {
  //   gsap.to(
  //     heroContentRef?.current,
  //     {
  //       x: -100,
  //       z: 500,
  //       opacity: 0,
  //       duration: 1,
  //       stagger: 0.1,
  //       scrollTrigger: {
  //         trigger: "#hero",
  //         start: "bottom 100%",
  //         end: "bottom 80%",
  //         scrub: 1,
  //       },
  //     }
  //   );
  //   gsap.to(
  //     heroImageRef?.current,
  //     {
  //       x: 100,
  //       z: 500,
  //       opacity: 0,
  //       duration: 1,
  //       stagger: 0.1,
  //       scrollTrigger: {
  //         trigger: "#hero",
  //         start: "bottom 100%",
  //         end: "bottom 80%",
  //         scrub: 1,
  //         pin: true,
  //       },
  //     }
  //   );
  // }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        // Desktop only
        "(min-width: 480px)": () => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: `.${styles.projects}`,
              start: "top top",
              end: "bottom top",
              scrub: 1,
              pin: true,
            },
          });

          tl.fromTo(
            `.${styles.project}`,
            { y: "100%", opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: { each: 2, from: "start" },
            }
          ).to(
            `.${styles.project}`,
            {
              y: "-100%",
              opacity: 0,
              duration: 0.8,
              stagger: { each: 2, from: "start" },
            },
            "+=5"
          );
        },

        // Mobile only – same animation, no pin
        "(max-width: 479px)": () => {
          const cards = gsap.utils.toArray<HTMLElement>(`.${styles.project}`);

          cards.forEach((card) => {
            gsap.fromTo(
              card,
              { opacity: 0, y: 80 },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: card,
                  start: "top 85%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          });
        },
      });
    });

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.to(heroSubHeadingRef.current, {
      text: heroSubHeading[heroSubHeadingIndex],
      duration: heroSubHeading[heroSubHeadingIndex].length / 10,
    });
    tl.to(heroSubHeadingRef.current, { duration: 3 });
    tl.to(heroSubHeadingRef.current, {
      text: "",
      duration: 3,
      onComplete: () =>
        setHeroSubHeadingIndex((prev) => (prev + 1) % heroSubHeading.length),
    });
  }, [heroSubHeadingIndex]);

  return (
    <>
      <section id="hero" className={styles.hero}>
        <div className={styles.heroContent} ref={heroContentRef}>
          <p>Hey, I am</p>
          <h1>DURAI PON SINGH</h1>
          <p ref={heroSubHeadingRef}></p>
          <div className={styles.heroBtns}>
            <TertiaryLinks
              label="View My Work"
              link="/projects"
              dowloadble={false}
            />
            <SecondaryLinks
              label="Contact Me"
              link="/contatc"
              dowloadble={false}
            />
          </div>
        </div>
        <div className={styles.heroImage} ref={heroImageRef}>
          <motion.img
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src={"home/hero.png"}
            alt="Durai Pon Singh D | Full Stack Develper and AI Engineer"
          />
        </div>
      </section>
      <section id="about" className={styles.about} ref={aboutRef}>
        <h1>Who I Am</h1>
        <p>
          I&apos;m Durai Pon Singh, a dedicated Computer Science and Engineering
          student with a deep curiosity for how things work. My journey
          isn&apos;t just about writing code; it&apos;s about building a
          versatile skill set that bridges technical precision with creative
          problem-solving.
        </p>
        <div>
          <Counter label={"Active Years"} value={3} suffix={"+"} />
          <Counter label={"Product Builds"} value={7} suffix={"+"} />
          <Counter label={"Client Work"} value={2} suffix={"+"} />
        </div>
      </section>
      <section id="projects" className={styles.projects}>
        <div className={styles.projects_heading}>
          <h1>What I do</h1>
          <SecondaryLinks
            label="See More"
            link="/projects"
            dowloadble={false}
          />
        </div>
        <div className={styles.projects_container}>
          {projectsData.map((project, i) => (
            <div className={styles.project} key={i}>
              <img src={project.image} alt={project.description} />
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <TertiaryLinks
                label="View Project"
                link={project.link}
                dowloadble={false}
              />
            </div>
          ))}
        </div>
      </section>
      <section className={styles.contact}></section>
    </>
  );
};

export default Page;
