import { RefObject, useRef } from "react";
import styles from "./AboutMeSection.module.css";
import useReveal from "../../lib/hooks/useReveal";

interface AboutMeProps {
  aboutSectionRef: RefObject<HTMLDivElement | null>;
}

function AboutMeSection({ aboutSectionRef }: AboutMeProps) {
  const contentRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  useReveal(contentRefs[0]);
  useReveal(contentRefs[1]);
  useReveal(contentRefs[2]);
  useReveal(contentRefs[3]);
  useReveal(contentRefs[4]);
  useReveal(contentRefs[5]);
  useReveal(contentRefs[6]);
  useReveal(contentRefs[7]);
  useReveal(contentRefs[8]);

  return (
    <section
      ref={aboutSectionRef}
      data-section="zwei"
      className={styles.container}
    >
      <div className={styles.gridContainer}>
        <div className={styles.gridColumn}>
          <div className={styles.headerContainer}>
            <h3 ref={contentRefs[0]} className="section">
              About me <br /> and my process
            </h3>
            <p ref={contentRefs[1]} className="section">
              Learn more about my believe and the thing a business needs to work
              better.
            </p>
          </div>
        </div>
        <div className={styles.gridColumn2}>
          <div className={styles.contentContainer}>
            <div className={styles.content}>
              <div className={styles.contentTitle}>
                <p ref={contentRefs[2]} className="section">
                  Helping others to succeed is my calling
                </p>
              </div>
              <p ref={contentRefs[3]} className="section">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                ipsam, sint dolore ad voluptatem repudiandae veniam vitae a,
                ratione sit cupiditate ipsa asperiores, quaerat numquam. Nemo
                ipsam, sint dolore ad voluptatem repudiandae veniam vitae.
              </p>
            </div>
            <div className={styles.content}>
              <div className={styles.contentTitle}>
                <p ref={contentRefs[4]} className="section">
                  Every opportunity is an option to grow
                </p>
              </div>
              <p ref={contentRefs[5]} className="section">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                ipsam, sint dolore ad voluptatem repudiandae veniam vitae a,
                ratione sit cupiditate ipsa asperiores, quaerat numquam. Nemo
                ipsam, sint dolore ad voluptatem repudiandae veniam vitae.
              </p>
            </div>
            <div className={styles.content}>
              <div className={styles.contentTitle}>
                <p ref={contentRefs[6]} className="section">
                  My vision and strategy
                </p>
              </div>
              <p ref={contentRefs[7]} className="section">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                ipsam, sint dolore ad voluptatem repudiandae veniam vitae a,
                ratione sit cupiditate ipsa asperiores, quaerat numquam. Nemo
                ipsam, sint dolore ad voluptatem repudiandae veniam vitae.
              </p>
              <br />
              <p ref={contentRefs[8]} className="section">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                ipsam, sint dolore ad voluptatem repudiandae veniam vitae a,
                ratione sit cupiditate ipsa asperiores, quaerat numquam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMeSection;
