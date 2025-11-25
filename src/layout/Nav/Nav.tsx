"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import styles from "./Nav.module.css";
import { link } from "@/types/links";
import PrimaryLinks from "@/components/PrimaryLinks/PrimaryLinks";
import SecondaryLinks from "@/components/SecondaryLinks/SecondaryLinks";
import HamburgerMenu from "@/assets/HamburgerMenu/HamburgerMenu";
import { gsap } from "gsap";

const nav_links: link[] = [
  { label: "Home", link: "/home" },
  { label: "About", link: "/about" },
  { label: "Projects", link: "/project" },
  { label: "Contact", link: "/contact" },
];

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const linksRef = useRef<HTMLSpanElement[] | null[]>([]);

  useEffect(() => {
    const handleResize = () => setMobileView(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!menuRef.current || !mobileView) return;

    if (menuOpen) {
      const tl = gsap.timeline();
      tl.set(menuRef.current, { display: "flex" });
      tl.to(menuRef.current, { x: 0, duration: 0.5, ease: "power3.out" });
      tl.fromTo(
        linksRef.current,
        { x: 25, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.2, duration: 0.4, ease: "power2.out" },
        "-=0.2"
      );
    } else {
      const tl = gsap.timeline();
      tl.to(menuRef.current, { x: "100%", duration: 0.5, ease: "power3.in" });
      tl.set(menuRef.current, { display: "none" });
    }
  }, [menuOpen, mobileView]);

  if (mobileView) {
    return (
      <motion.nav
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ ease: "linear", duration: 0.5 }}
        className={styles.mobile_nav}
      >
        <h1 className={styles.mobile_nav_name}>DURAI PON SINGH</h1>

        <div
          className={styles.mobile_HamburgerMenu}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <HamburgerMenu isMenuOpen={menuOpen} />
        </div>

        <div className={styles.mobile_nav_links} ref={menuRef}>
          {nav_links.map((navLink, i) => (
            <span
              key={i}
              ref={(el) => {
                if (el) {
                  linksRef.current[i] = el;
                }
              }}
            >
              <PrimaryLinks label={navLink.label} link={navLink.link} />
            </span>
          ))}

          <span
            ref={(el) => {
              if (el) {
                linksRef.current[nav_links.length] = el;
              }
            }}
          >
            <SecondaryLinks
              label="My Resume"
              link="myResume.pdf"
              dowloadble={true}
            />
          </span>
        </div>
      </motion.nav>
    );
  }

  return (
    <motion.nav
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{ ease: "linear", duration: 0.5 }}
      className={styles.nav}
    >
      <h1 className={styles.nav_name}>DURAI PON SINGH</h1>

      <div className={styles.nav_links}>
        {nav_links.map((navLink, i) => (
          <span key={i}>
            <PrimaryLinks label={navLink.label} link={navLink.link} />
          </span>
        ))}

        <span>
          <SecondaryLinks
            label="My Resume"
            link="myResume.pdf"
            dowloadble={true}
          />
        </span>
      </div>
    </motion.nav>
  );
};

export default Nav;
