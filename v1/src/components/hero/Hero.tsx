import { RefObject } from "react";
import styles from "./Hero.module.css";
import { Indicator } from "../../lib/types/types";

interface HeroProps {
  activeIndex: number;
  heroRef: RefObject<HTMLDivElement | null>;
  indicators: Indicator;
}

function Hero({ heroRef, activeIndex, indicators }: HeroProps) {
  return (
    <section ref={heroRef} data-section="eins" className={styles.heroSection}>
      <div className={styles.innerRow}></div>
      <div className={`${styles.innerRow} ${styles.middleRow}`}>
        <ul className={styles.middleRowInner}>
          <li>
            <a
              href="https://www.linkedin.com/kunle-adesokan"
              aria-label="Adekunle on LinkedIn"
              target="_blank"
              rel="noreferrer noopener"
              className="nav-link"
            >
              LI
            </a>
          </li>
          <li>
            <a
              href="https://www.x.com/kunle-ronald"
              aria-label="Adekunle on X"
              target="_blank"
              rel="noreferrer noopener"
              className="nav-link"
            >
              TW
            </a>
          </li>
          <li>
            <a
              href="https://www.github.com/kunle-coded"
              aria-label="Adekunle on GitHub"
              target="_blank"
              rel="noreferrer noopener"
              className="nav-link"
            >
              GH
            </a>
          </li>
        </ul>
        <nav aria-label="Section navigation" className={styles.sectionNav}>
          <ul className={styles.navList}>
            <li
              tabIndex={0}
              style={{ color: indicators.first ? "#e6e6e6" : "" }}
            >
              <button
                type="button"
                aria-label="Go to first section. Pitch"
                className={activeIndex === 0 ? styles.current : ""}
              ></button>
            </li>
            <li
              tabIndex={1}
              style={{ color: indicators.second ? "#e6e6e6" : "" }}
            >
              <button
                type="button"
                aria-label="Go to second section. About"
                className={activeIndex === 1 ? styles.current : ""}
              ></button>
            </li>
            <li
              tabIndex={2}
              style={{ color: indicators.third ? "#e6e6e6" : "" }}
            >
              <button
                type="button"
                aria-label="Go to third section. Skills"
                className={activeIndex === 2 ? styles.current : ""}
              ></button>
            </li>
            <li
              tabIndex={3}
              style={{ color: indicators.fourth ? "#e6e6e6" : "" }}
            >
              <button
                type="button"
                aria-label="Go to fourth section. Projects"
                className={activeIndex === 3 ? styles.current : ""}
              ></button>
            </li>
            <li
              tabIndex={4}
              style={{ color: indicators.fifth ? "#e6e6e6" : "" }}
            >
              <button
                type="button"
                aria-label="Go to fifth section. Contact"
                className={activeIndex === 4 ? styles.current : ""}
              ></button>
            </li>
          </ul>
        </nav>
      </div>
      <div className={`${styles.innerRow} ${styles.bottomRow}`}>
        <div className={styles.bottomRowLeft}>
          <h2>Adekunle A.</h2>
          <h3>Software Engineer</h3>
        </div>
        <a href="/work" className={styles.heroCTA}>
          view my work{" "}
          <span className={styles.heroCTAIcon}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.66675 11.3334L10.0001 8.00002L6.66675 4.66669"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}

export default Hero;
