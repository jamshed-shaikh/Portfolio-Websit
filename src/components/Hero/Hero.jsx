import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shaikh Jamshed</h1>
        <p className={styles.description}>           
          I'm a frontend developer with experience in building responsive and optimized sites. <br/> <br />Reach out if you'd like to learn more!

        </p>
        <a href="https://www.linkedin.com/in/jamshed-shaikh-508941214/" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImages.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
