import useScrollDirection from "../../lib/hooks/useScrollDirection";
import LinkButtonCustom from "../../ui/buttons/LinkButtonCustom";
import styles from "./Header.module.css";

function Header() {
  const { isScrollHome } = useScrollDirection();

  return (
    <header
      className={`${styles.headerMain} ${
        isScrollHome ? styles.hide : styles.show
      }`}
    >
      <div className={styles.headerWrapper}>
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
          <LinkButtonCustom />
        </div>
      </div>
    </header>
  );
}

export default Header;
