"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HamburgerMenu = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  const middleLine = useRef<SVGLineElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.3, ease: "power2.inOut" },
    });

    if (!isMenuOpen) {
      tl.to(middleLine.current, { attr: { x1: 12, x2: 21 } });
    } else {
      tl.to(middleLine.current, { attr: { x1: 3, x2: 12 } });
    }
  }, [isMenuOpen]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      style={{ zIndex: 9999, width: "30px", height: "30px", cursor: "pointer" }}
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line ref={middleLine} x1="3" y1="12" x2="12" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
};

export default HamburgerMenu;
