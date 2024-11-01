import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';
import TextButton from '../../ui/buttons/TextButton';
import Display from '../../ui/headings/Display';
import HeadingOne from '../../ui/headings/HeadingOne';
import DesktopWireframe from './DesktopWireframe';
import styles from './Hero.module.css';
import MobileWireframe from './MobileWireframe';

// interface

function Hero() {
  const [isWireframScroll, setIsWireframeScroll] = useState<boolean>(false);
  const [moveValue, setMoveValue] = useState<number>(0);
  const [isHover, setIsHover] = useState<boolean>(false);
  // const [initialY, setInitialY] = useState<number>(0);

  const prevX = useRef<number | null>(null);
  const prevY = useRef<number | null>(null);

  const getMouseMovement = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, pageX } = event;

    const width = window.innerWidth;
    const scrollPercentage = (clientX / width) * 100;
    // const scrollPercentage = (clientX / 1425) * 100;

    if (prevX.current !== null && prevY.current !== null) {
      setIsWireframeScroll(true);
      if (clientX > prevX.current) {
        setMoveValue(-scrollPercentage);
        console.log(' moving right', scrollPercentage);
      } else if (clientX < prevX.current) {
        setMoveValue(scrollPercentage);
        console.log(' moving left', scrollPercentage);
      }

      // if (clientY > prevY.current) {
      //   setMoveValue(clientX);
      //   // console.log(' moving down', prevY.current, clientY);
      // } else if (clientY < prevY.current) {
      //   setMoveValue(-clientX);
      //   // console.log(' moving up', prevY.current, clientY);
      // }
    }
    prevX.current = clientX;
    prevY.current = clientY;
  };

  const onDesktopHover = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    // setIsWireframeScroll(false);
    // setMoveValue(0)
  };

  return (
    <div className="containerGlobal" onMouseMove={getMouseMovement}>
      <div className={styles.containerHro}>
        <div className={styles.contentHro}>
          <div className={`${styles.gridColmn} ${styles.colmLft}`}>
            <div className={styles.hroTxt}>
              {/* <p style={{ fontFamily: 'Fira Code' }}>{`<Hi, I'm,/>`}</p> */}
              <div className={styles.hroTxtDspl}>
                <Display>Kunle</Display>
                <span>.</span>
              </div>
              <div className={styles.hroTxtHdg}>
                <HeadingOne>Creating magic for the web.</HeadingOne>
              </div>
              <div className={styles.hroTxtCta}>
                <TextButton href="/work">View my work</TextButton>
              </div>
            </div>
          </div>
          <div className={`${styles.gridColmn} ${styles.colmRgt}`}>
            <div className={styles.innerGridCntnr}>
              <div className={styles.dktpCntnr}>
                <DesktopWireframe
                  isScroll={isWireframScroll}
                  scrollValue={moveValue}
                  isHover={isHover}
                />
              </div>
              <div className={styles.mblCntnr}>
                <MobileWireframe />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
