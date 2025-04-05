import { useRef } from "react";
import styles from "./AboutSection.module.css";
import useReveal from "../../hooks/useReveal";

function AboutSection() {
  const aboutRef = useRef(null);
  useReveal(aboutRef);

  return (
    <section data-section="zwei" className={styles.aboutSection}>
      <div ref={aboutRef} className={`section ${styles.innerContainer}`}>
        <div className={`${styles.gridCol} ${styles.leftCol}`}>
          <p className={styles.leftColText}>
            I’m passionate about crafting digital experiences that{" "}
            <span>stand out</span>, are engaging, accessible, and user-centric.
          </p>
          <svg
            width="121"
            height="66"
            viewBox="0 0 81 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.leftColBg}
          >
            <path
              d="M5.99987 1.5C2.3332 3.33333 -2.5 14.5356 5.99987 20C12.9998 24.5 22.0998 27.3 62.4998 22.5L78.9998 20M78.9998 20L73.9998 17M78.9998 20L73.9998 24.5"
              stroke="#5E6469"
              strokeWidth="1.5"
            />
          </svg>
        </div>
        <div className={`${styles.gridCol} ${styles.middleCol}`}>
          <h2 className={styles.taglineBig}>Creating magic for the web</h2>
          <svg
            viewBox="0 0 184 132"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.taglineBg}
          >
            <path
              d="M167.503 118L173.003 121M173.003 121L167.503 125M173.003 121C111.5 128 -3 147.5 1.50301 98C5.16867 83.1666 29.1 45.2 95.5 12C103.711 8.46071 124.597 3.7189 150.068 8.49995M150.068 8.49995C154.583 9.34747 159.242 10.4942 164 12C178.5 17.1666 198.4 29 162 35C143.333 38.6666 93.6 44.7 44 39.5C29.4794 37.631 11.0647 30.5037 36.0613 16M150.068 8.49995C108.122 -4.70005 66.8784 2.99995 51.5 8.49995C45.1251 11.1928 40.0426 13.69 36.0613 16M150.068 8.49995C169.757 15 197.322 30.6 150.068 41C132.211 44.5 86.9976 50.9 49 48.5C30.2075 46.5 1.31035 37.2 36.0613 16"
              stroke="#5E6469"
              strokeWidth="1.5"
            />
          </svg>
        </div>
        <div className={`${styles.gridCol} ${styles.rightCol}`}>
          <p>
            I create intuitive, user-centric designs that emphasize
            functionality, aesthetics, and accessibility.
          </p>
          <p>
            Developing scalable web applications, leveraging modern frameworks
            and libraries with a strong emphasis on performance, accessibility,
            and cross-platform compatibility. My expertise extends to building
            mobile applications, ensuring seamless user experiences across
            devices.
          </p>
          <svg
            width="323"
            height="279"
            viewBox="0 0 173 129"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.rightColBg}
          >
            <path
              d="M160 96.5C147 105 127.5 116.5 123.5 113.5C119.333 113.833 121.6 98.7 162 37.5C165 32.1666 170.8 20.5 172 14.5C173.2 8.5 163 8.99998 149.5 23.5001C130 44.1667 88.1981 91.4782 89 90.5C97.1972 80.5 59.5 127.5 56.0002 127.5C51.2566 127.5 60.0002 114 78.0002 89.5C96.0002 65 115 41.5 116.5 39.5C118 37.5 137 17 137.5 3.99997C138 -9.00003 91.5 24.5 90 25C88.8 25.4 30.1667 71.5 1 94.5"
              stroke="#5E6469"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
