import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import useScrollDirection from "../../lib/hooks/useScrollDirection";
import { useIsMobile } from "../../lib/hooks/useIsMobile";

import LinkButton from "../../ui/buttons/LinkButton";
import styles from "./PageHeader.module.css";

interface PageHeaderProps {
  contentRef: React.RefObject<HTMLElement | null>;
}

function PageHeader({ contentRef }: PageHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isScrolling, isScrollDown } = useScrollDirection();
  const isMobile = useIsMobile();
  const location = useLocation();
  const pathName = location.pathname;
  const isHome = location.pathname === "/";

  const bodyRef = useRef(document.body);

  // const shouldShowHeader = !isHome || isMobile || (isHome && isScrolling);
  // const shouldShowHeader = !isHome || (isHome && (isMobile || isScrolling));

  function handleMobileMenu() {
    setIsMenuOpen((prevState) => !prevState);
  }

  useEffect(() => {
    const handleBody = () => {
      document.querySelector("body")?.classList.remove("blur");
      setIsMenuOpen(false);
    };

    const contentRefCopy = contentRef.current;

    if (isMenuOpen) {
      bodyRef.current.classList.add("blur");
      contentRefCopy?.addEventListener("click", handleBody);
    } else {
      bodyRef.current.classList.remove("blur");
    }

    return () => {
      contentRefCopy?.removeEventListener("click", handleBody);
    };
  }, [isMenuOpen]);

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
                About
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
            <button
              aria-label="Menu"
              className={`${styles.hamburgerMenuBtn} ${
                isMenuOpen ? styles.showMenu : ""
              }`}
              onClick={handleMobileMenu}
            >
              <div className={styles.hamBox}>
                <div className={styles.hamBoxInner}></div>
              </div>
              <div className={styles.hamburgerB}></div>
            </button>
            <aside
              aria-hidden={isMenuOpen}
              className={`${styles.menuDropdown} ${
                isMenuOpen ? styles.showDropdown : ""
              }`}
            >
              <nav>
                <ol>
                  {pathName !== "/" && (
                    <li>
                      <a href="/" className="" aria-selected="false">
                        Home
                      </a>
                    </li>
                  )}
                  <li>
                    <a
                      href="/about"
                      className=""
                      aria-selected={pathName === "/about"}
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="/work"
                      className=""
                      aria-selected={pathName === "/work"}
                    >
                      Work
                    </a>
                  </li>
                  <li>
                    <a
                      href="/notes"
                      className=""
                      aria-selected={pathName === "/notes"}
                    >
                      Notes
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className=""
                      aria-selected={pathName === "/contact"}
                    >
                      Contact
                    </a>
                  </li>
                </ol>
                <div className={styles.menuCta}>
                  <LinkButton label="Resume" link="/resume" />
                </div>
              </nav>
            </aside>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default PageHeader;
