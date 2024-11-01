import { useEffect, useState } from 'react';
import styles from './Header.module.css';
import LinkButton from '../../ui/buttons/LinkButton';

interface Style {
  width: string;
  borderWidth: string;
  borderStyle: string;
  borderRadius: string;
  borderColor: string;
  backgroundColor: string;
  backdropFilter: string;
}

const initialHeaderStyle = {
  width: '100%',
  borderWidth: '0px',
  borderStyle: 'solid',
  borderRadius: '0px',
  borderColor: 'rgb(0, 0, 0, 0)',
  backgroundColor: 'rgb(0, 0, 0, 0)',
  backdropFilter: 'blur(0px)',
};

function Header() {
  const [isScroll, setIsScroll] = useState(false);
  const [headerStyle, setHeaderStyle] = useState<Style>(initialHeaderStyle);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // How to check if a page has loaded in React
  // https://stackoverflow.com/questions/49422521/how-to-check-if-a-page-has-loaded

  useEffect(() => {
    const onPageLoad = () => {
      setIsLoaded(true);
    };

    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad, false);
    }

    return () => {
      window.removeEventListener('load', onPageLoad, false);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 10;
      const progress = Math.min(scrollY / threshold, 1);

      const headerDynWidth = 100 - progress * 100;

      let width = `${headerDynWidth}%`;

      const dynamicHeaderStyle = {
        borderWidth: `${progress * 1}px`,
        borderStyle: 'solid',
        borderRadius: `${progress * 1000}px`,
        borderColor: `rgb(71, 71, 73, ${progress * 0.1})`,
        backgroundColor: `rgb(195, 195, 196, ${progress * 0.07})`,
        backdropFilter: `blur(${progress * 10}px)`,
      };

      if (scrollY > 0) {
        setIsScroll(true);
        if (progress >= 0.05) {
          width = '0%';
        }
        setHeaderStyle({ ...dynamicHeaderStyle, width });
      } else {
        setIsScroll(false);
        setHeaderStyle(initialHeaderStyle);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/work') {
      setCurrentPage(1);
    } else if (path === '/about') {
      setCurrentPage(2);
    } else if (path === '/notes') {
      setCurrentPage(3);
    } else if (path === '/contact') {
      setCurrentPage(4);
    } else {
      setCurrentPage(0);
    }
  }, []);

  return (
    <div
      className={styles.container}
      style={
        isLoaded
          ? { opacity: 1, transform: 'translateY(0px)' }
          : { opacity: 0, transform: 'translateY(-100px)' }
      }
    >
      <div
        className={`${styles.contentControl} ${isScroll ? styles.contentScroll : ''}`}
      >
        <div className={styles.headerWrapper}>
          <div className={styles.headerContent} style={headerStyle}>
            <div className={styles.logo}>
              <a href="/">
                <p className={styles.logoText}>
                  Kunle<span>.</span>
                </p>
              </a>
            </div>
            <nav className={styles.navMenu}>
              <ul className={styles.navMenuList}>
                <li>
                  <a
                    className={`${currentPage === 1 ? styles.active : ''}`}
                    href="/work"
                  >
                    Work
                  </a>
                </li>
                <li>
                  <a
                    className={`${currentPage === 2 ? styles.active : ''}`}
                    href="/about"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className={`${currentPage === 3 ? styles.active : ''}`}
                    href="notes"
                  >
                    Notes
                  </a>
                </li>
                <li>
                  <a
                    className={`${currentPage === 4 ? styles.active : ''}`}
                    href="contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            <div className={styles.headerCTA}>
              <LinkButton
                label="Résumé"
                href="resume"
                type="custom"
                isScroll={isScroll}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
