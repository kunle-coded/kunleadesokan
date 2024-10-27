import { useEffect, useState } from 'react';
import styles from './Header.module.css';

const initialStyle = {
  borderBottomWidth: '0px',
  borderColor: 'rgba(0, 0, 0, 0)',
  borderLeftWidth: '0px',
  borderRightWidth: '0px',
  borderStyle: 'solid',
  borderTopWidth: '0px',
  backdropFilter: 'none',
  backgroundColor: 'rgba(0, 0, 0, 0)',
  borderRadius: '0px',
  transform: 'none',
  transformOrigin: '50% 50% 0px',
  // transition: 'transform 250ms ease',
};

function Header() {
  const [isScroll, setIsScroll] = useState(false);
  const [contentStyle, setContentStyle] = useState(initialStyle);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Determine transition progress (0 to 1)
      const progress = Math.min(scrollY / 400, 1); // 200px threshold (example)

      console.log(progress);

      // Calculate dynamic styles based on scroll progress
      const dynamicStyle = {
        borderBottomWidth: `${progress}px`,
        borderColor: `rgba(246, 246, 246, ${progress * 0.07})`,
        borderLeftWidth: `${progress}px`,
        borderRightWidth: `${progress}px`,
        borderTopWidth: `${progress}px`,
        backdropFilter: `blur(${progress * 10}px)`,
        backgroundColor: `rgba(246, 246, 246, ${progress * 0.1})`,
        borderRadius: `${1000 * progress}px`,
        transform: `scale(${1 - progress * 0.3})`, // Scale down slightly
      };

      setContentStyle({ ...initialStyle, ...dynamicStyle });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     setIsScroll(false);
  //   }, 2000);

  //   document.addEventListener('scroll', () => {
  //     setIsScroll(true);
  //   });

  //   return () => {
  //     removeEventListener('scroll', () => {});
  //     clearTimeout(timeoutId);
  //   };
  // });

  // .contentScroll .headerContent {
  //   --border-bottom-width: 1px;
  //   --border-color: var(--blck-40, rgba(246, 246, 246, 0.07));
  //   --border-left-width: 1px;
  //   --border-right-width: 1px;
  //   --border-style: solid;
  //   --border-top-width: 1px;
  //   backdrop-filter: blur(10px);
  //   background-color: var(--blck-20, rgba(246, 246, 246, 0.1));
  //   border-radius: 1000px;
  //   transform: none;
  //   transform-origin: 50% 50% 0px;
  // }

  const contentStyleActive = {
    borderBottomWidth: '1px',
    borderColor: 'var(--blck-40, rgba(246, 246, 246, 0.07))',
    borderLeftWidth: '1px',
    borderRightWidth: '1px',
    borderStyle: 'solid',
    borderTopWidth: '1px',
    backdropFilter: 'blur(10px)',
    backgroundColor: 'var(--blck-20, rgba(246, 246, 246, 0.1))',
    borderRadius: '1000px',
    transform: 'none',
    transformOrigin: '50% 50% 0px',
    transition: 'transform 250ms ease',
  };

  return (
    <div
      className={styles.container}
      style={{ opacity: '1', transform: 'perspective(1200px)' }}
    >
      <div
        className={`${styles.contentControl} ${isScroll ? styles.contentScroll : ''}`}
        style={{ display: 'contents' }}
      >
        <div
          className={styles.headerWrapper}
          style={{
            backdropFilter: 'none',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            width: '100%',
            borderRadius: '1000px',
            transform: 'none',
            transformOrigin: '50% 50% 0px',
          }}
        >
          <div className={styles.headerContent} style={contentStyle}>
            <div>
              <p>logo</p>
            </div>
            <nav className={styles.navMenu}>
              <ul>
                <li>Work</li>
                <li>About</li>
                <li>Notes</li>
                <li>Contact</li>
              </ul>
            </nav>

            <div>CTA</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
