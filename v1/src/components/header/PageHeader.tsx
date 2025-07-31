import { useLocation } from "react-router";
import useScrollDirection from "../../lib/hooks/useScrollDirection";
import { useIsMobile } from "../../lib/hooks/useIsMobile";

import LinkButton from "../../ui/buttons/LinkButton";
import styles from "./PageHeader.module.css";

function PageHeader() {
  const { isScrolling, isScrollDown } = useScrollDirection();
  const isMobile = useIsMobile();
  const location = useLocation();
  const pathName = location.pathname;
  const isHome = location.pathname === "/";

  // const shouldShowHeader = !isHome || isMobile || (isHome && isScrolling);
  // const shouldShowHeader = !isHome || (isHome && (isMobile || isScrolling));

  return (
    <header
      className={`${styles.container}  ${
        isHome && !isScrolling && !isMobile ? styles.hideHeader : ""
      }  ${
        isScrolling
          ? isScrollDown
            ? styles.hideHeader
            : styles.showHeader
          : ""
      }`}
    >
      <nav className={styles.navWrapper}>
        <div className={styles.hdrLogo}>
          <a href="/">L</a>
        </div>
        <div className={styles.hdrMenu}>
          <ol>
            {pathName !== "/" && (
              <li>
                <a href="/" className="nav-link" aria-selected="false">
                  Home
                </a>
              </li>
            )}
            <li>
              <a
                href="/about"
                className="nav-link"
                aria-selected={pathName === "/about"}
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="/work"
                className="nav-link"
                aria-selected={pathName === "/work"}
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="/notes"
                className="nav-link"
                aria-selected={pathName === "/notes"}
              >
                Notes
              </a>
            </li>

            <li>
              <a
                href="/contact"
                className="nav-link"
                aria-selected={pathName === "/contact"}
              >
                Contact
              </a>
            </li>
          </ol>
          <div className={styles.hdrBtnWrapper}>
            <LinkButton label="Resume" link="/resume" />
          </div>
        </div>
        <div className={styles.hdrMenuMobile}>
          <div>
            <button aria-label="Menu" className={styles.hamburgerMenuBtn}>
              <div className={styles.hamBox}>
                <div className={styles.hamBoxInner}></div>
              </div>
              <div className={styles.hamburgerB}></div>
            </button>
            <aside aria-hidden="true"></aside>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default PageHeader;
