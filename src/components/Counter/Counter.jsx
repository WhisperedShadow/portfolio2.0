import styles from "./Counter.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Counter = ({ label, value, suffix }) => {
  const el = useRef(null);

  useEffect(() => {
    const counterEl = el.current;

    gsap.fromTo(
      counterEl,
      { innerText: 0 },
      {
        innerText: value,
        duration: 2,
        ease: "power1.out",
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: counterEl,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        onUpdate: function () {
          counterEl.innerText = Math.floor(counterEl.innerText);
        },
        onComplete: function () {
          counterEl.innerText = `${value}`;
        },
      }
    );
  }, [value]);

  return (
    <div className={styles.counter}>
      <div className={styles.values}>
        <span ref={el} className={styles.number}>0</span>
        <span className={styles.suffix}>{suffix}</span>
      </div>
      <p className={styles.label}>{label}</p>
    </div>
  );
};

export default Counter;