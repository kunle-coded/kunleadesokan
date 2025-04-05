import styles from "./Hero.module.css";

function Hero() {
  return (
    <section data-section="eins" className={styles.heroSection}>
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
            <li tabIndex={0}>
              <button
                type="button"
                aria-label="Go to first section. Pitch"
                className={styles.current}
              ></button>
            </li>
            <li tabIndex={1}>
              <button
                type="button"
                aria-label="Go to second section. About"
                // className={styles.current}
              ></button>
            </li>
            <li tabIndex={2}>
              <button
                type="button"
                aria-label="Go to third section. Skills"
                // className={styles.current}
              ></button>
            </li>
            <li tabIndex={3}>
              <button
                type="button"
                aria-label="Go to fourth section. Projects"
                // className={styles.current}
              ></button>
            </li>
            <li tabIndex={4}>
              <button
                type="button"
                aria-label="Go to fifth section. Contact"
                // className={styles.current}
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
