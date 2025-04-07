import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.ftrCntnr}>
      <nav className={styles.ftrInnrGrd}>
        <div className={styles.ftrClmnCntnrBrand}>
          <div className={styles.ftrHdr}>
            <p>Designed & Built by Kunle Adesokan</p>
          </div>
          <ul className={styles.ftrNvgtion}>
            <li>
              <a href="/about" className="nav-link">
                About me
              </a>
            </li>
            <li>
              <a href="/contact" className="nav-link">
                Contact
              </a>
            </li>
            <li>&copy; 2025</li>
          </ul>
        </div>
        <div className={styles.ftrClmnCntnrLinks}>
          <div className={styles.ftrHdr}>
            <p>Portfolio</p>
          </div>
          <ul className={styles.ftrNvgtion}>
            <li>
              <a href="/work" className="nav-link">
                Work
              </a>
            </li>
            <li>
              <a href="/resume" className="nav-link">
                Résumé
              </a>
            </li>
            <li>
              <a href="/notes" className="nav-link">
                Notes
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.ftrClmnCntnrContact}>
          <div className={styles.ftrHdr}>
            <p>Connect</p>
          </div>
          <ul className={styles.ftrNvgtion}>
            <li>
              <a
                href="https://github.com/kunle-coded"
                target="_blank"
                rel="noopener"
                referrerPolicy="no-referrer"
                className="nav-link"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/kunleadesokan/"
                target="_blank"
                rel="noopener"
                referrerPolicy="no-referrer"
                className="nav-link"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://x.com/kunle_codes"
                target="_blank"
                rel="noopener"
                referrerPolicy="no-referrer"
                className="nav-link"
              >
                X
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
