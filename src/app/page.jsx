"use client";
import { gsap } from "gsap";
import { TextPlugin, ScrollTrigger } from "gsap/all";
import { useRef, useEffect, useState, useLayoutEffect } from "react";
import styles from "./page.module.css";
import SecondaryLinks from "@/components/SecondaryLinks/SecondaryLinks";
import TertiaryLinks from "@/components/TertiaryLinks/TertiaryLinks";
import { RefObject } from "react";

// interface AnimationConfig {
//   trigger: string;
//   element: RefObject<HTMLElement>;
//   axis: { x?: number; y?: number; z?: number };
//   children?: boolean;
// }


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const heroSubHeading = [
  "I craft modern, interactive, and dynamic web experiences.",
  "I am exploring AI and Machine Learning.",
];

const Page = () => {
  const [mobileView, setMobileView] = useState(false);
  const [heroSubHeadingIndex, setHeroSubHeadingIndex] = useState(0);
  const heroSubHeadingRef = useRef<HTMLElement | null>(null);
  const heroContentRef = useRef<HTMLElement | null>(null);
  const heroImageRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);

  // const enterAnimations:AnimationConfig[] = [
  //   {
  //     trigger: "#about",
  //     element: aboutRef,
  //     axis: { x: 20, z: -500 },
  //     children: true,
  //   },
  // ];

  const exitAnimations = [
    {
      trigger: "#hero",
      element: heroContentRef,
      axis: { x: 20, z: 500 },
      children: true,
    },
    {
      trigger: "#hero",
      element: heroImageRef,
      axis: { x: -20, z: 500 },
    },
  ];

  useEffect(() => {}, []);
  useEffect(() => {
    const handleResize = () => setMobileView(window.innerWidth < 480);
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useLayoutEffect(() => {
    enterAnimations.forEach((animate) => {
      gsap.from(
        animate.children
          ? animate.element?.current?.children
          : animate.element.current,
        {
          ...animate.axis,
          opacity: 0,
          stagger: 0.1,
          scrollTrigger: {
            trigger: animate.trigger,
            start: "top 100%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );
    });

    exitAnimations.forEach((animate) => {
      gsap.to(
        animate.children
          ? animate.element?.current?.children
          : animate.element.current,
        {
          ...animate.axis,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: animate.trigger,
            start: "bottom 100%",
            end: "bottom 50%",
            scrub: 1,
          },
        }
      );
    });
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
          <img src={"home/hero.png"} />
        </div>
      </section>
      <section id="about" className={styles.about} ref={aboutRef}>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iusto
          aut dolore porro sit repellendus tempora fuga suscipit. Odit magni
          omnis fuga eius doloribus, veritatis fugiat a minima dolor
          consequatur!
        </div>
      </section>
      <section></section>
    </>
  );
};

export default Page;
