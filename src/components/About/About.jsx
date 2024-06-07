import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Myself :</h3>
              <p>
              I am a computer engineer with expertise in front-end development,
          particularly using the React.js.I have a solid understanding of JavaScript and its
          frameworks, enabling me to build efficient and scalable web
          applications.
           
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Education :</h3>
              <p>
              Rizvi College of Engineering <br />
              BE Computer Engineering,Mumbai University - 2021
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Skills :</h3>
              <p>
              My expertise is in React.js, Redux Toolkit, JavaScript, CSS, HTML, Tailwind CSS, Bootstrap, and GitHub.

</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
