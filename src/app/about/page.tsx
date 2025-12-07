import styles from "./page.module.css";

const page = () => {
  return (
    <section>
      <section className={styles.intro}>
        <div className={styles.intro_content}>
          <h1>I’m Durai,</h1>{" "}
          <p>
            - A <span>Full-Stack Developer</span> and <span>CSE student</span> who
            enjoys building clean, fast, and reliable digital experiences.{" "}
             I focus on turning concepts into products that feel
            effortless to use. <br />
            <br />
            <code>
              <i>
                <q>
                  Curiosity drives what I build. <br />
                  Consistency shapes how I build it.
                </q>
              </i>
            </code>
          </p>
        </div>
        <div className={styles.intro_image}>
          <img src="/home/hero.png" alt="Durai Profile Picture" />
        </div>
      </section>
      <section className={styles.strength}></section>
      <section className={styles.skills}></section>
      <section className={styles.contact}></section>
    </section>
  );
};

export default page;
