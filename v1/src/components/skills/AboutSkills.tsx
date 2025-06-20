import { useRef } from "react";
import DesignShape from "../shapes/DesignShape";
import EngineeringShape from "../shapes/EngineeringShape";
import styles from "./AboutSkills.module.css";
import useReveal from "../../lib/hooks/useReveal";

function AboutSkills() {
  const sectionRef = useRef(null);

  const { isIntersecting } = useReveal(sectionRef);

  return (
    <section className={styles.container}>
      <div ref={sectionRef} className={styles.colmnsWrapper}>
        <div className={styles.colInner}>
          <div className={styles.leftCol}>
            <h1>Engineering</h1>
            <p>
              In building JavaScript applications, I'm equipped with just the
              right tools, and can absolutely function independently of them to
              deliver fast, resilient solutions optimized for scale —
              performance and scalabilty are priorities on my radar.
            </p>
            <div className={styles.leftShapeContainer}>
              <div
                className={styles.leftShape}
                style={
                  isIntersecting
                    ? {
                        opacity: "1",
                        transform: "translate(0)",
                      }
                    : {}
                }
              >
                <EngineeringShape />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.colInner}>
          <div className={styles.rightCol}>
            <div className={styles.rightShapeContainer}>
              <div
                className={styles.rightShape}
                style={
                  isIntersecting
                    ? {
                        opacity: "1",
                        transform: "translate(0)",
                      }
                    : {}
                }
              >
                <DesignShape />
              </div>
            </div>
            <h1>Design</h1>
            <p>
              I'm probably not the typical designer positioned behind an
              Illustrator artboard adjusting pixels, but I design. Immersed in
              stylesheets tweaking font sizes and contemplating layouts is where
              you'll find me (~_^). I'm committed to creating fluent user
              experiences while staying fashionable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSkills;
