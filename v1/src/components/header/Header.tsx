import { useEffect, useState } from 'react';
import styles from './Header.module.css';

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
  const [headerStyle, setHeaderStyle] = useState(initialHeaderStyle);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 10;
      const progress = Math.min(scrollY / threshold, 1);

      const headerDynWidth = 100 - progress * 100;

      console.log(progress);

      // const dynamicHeaderStyle = {
      //   width: `${headerDynWidth}%`,
      //   borderWidth: `${progress * 1}px`,
      //   borderStyle: 'solid',
      //   borderRadius: `${progress * 1000}px`,
      //   backgroundColor: `rgb(0, 0, 0, ${progress * 0.1})`,
      //   backgroundBlurFilter: `blur(${progress * 10}px)`,
      // };

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

  return (
    <div className={styles.container}>
      <div
        className={`${styles.contentControl} ${isScroll ? styles.contentScroll : ''}`}
      >
        <div className={styles.headerWrapper}>
          <div className={styles.headerContent} style={headerStyle}>
            <div className={styles.logo}>
              <a href="">
                <p className={styles.logoText}>
                  Kunle<span>.</span>
                </p>
              </a>
            </div>
            <nav className={styles.navMenu}>
              <ul>
                <li>Work</li>
                <li>About</li>
                <li>Notes</li>
                <li>Contact</li>
              </ul>
            </nav>

            <div className={styles.headerCTA}>Resume</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
