import LinkButton from "../../ui/buttons/LinkButton";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.headerMain}>
      <div className={styles.headerInner}>
        <nav className={styles.headerNav}>
          <ul aria-label="Navigation menu">
            <li>
              <a href="/work" className="nav-link">
                Work
              </a>
            </li>
            <li>
              <a href="/about" className="nav-link">
                About me
              </a>
            </li>
            <li>
              <a href="/notes" className="nav-link">
                Notes
              </a>
            </li>
            <li>
              <a href="/contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <LinkButton label="Resume" link="/resume" />
      </div>
    </header>
  );
}

export default Header;
