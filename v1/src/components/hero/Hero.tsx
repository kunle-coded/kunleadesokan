import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';
import TextButton from '../../ui/buttons/TextButton';
import Display from '../../ui/headings/Display';
import HeadingOne from '../../ui/headings/HeadingOne';
import DesktopWireframe from './DesktopWireframe';
import styles from './Hero.module.css';
import MobileWireframe from './MobileWireframe';
import useWireframeAnimation from '../../hooks/useWireframeAnimation';

// interface 2126

const DESKTOP_MOBILE_HEIGHTS: number[] = [1425, 1855];

function Hero() {
  const { transformNum, transformNumTwo, getMouseMovement } =
    useWireframeAnimation(DESKTOP_MOBILE_HEIGHTS);

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
                <DesktopWireframe scrollValue={transformNum} />
              </div>
              <div className={styles.mblCntnr}>
                <MobileWireframe scrollValue={transformNumTwo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
