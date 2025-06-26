import styles from "./CV.module.css";
import SectionSubtitle from "../../ui/titles/SectionSubtitle";
import EduExpItem from "../../ui/lists/EduExpItem";
import School from "../shapes/School";
import { cv } from "../../lib/store/data";

function CV() {
  return (
    <section className={styles.container}>
      <div className={styles.innerWrapper}>
        <SectionSubtitle title="Education & Work Experience" />

        <div className={styles.eduExpContainer}>
          <div className={styles.eduExp}>
            <header>
              <span>
                <div className={styles.eduIcon}>
                  <School />
                </div>
              </span>
              <h3>Education</h3>
            </header>
            <ul>
              {cv.education.map((eduction) => (
                <EduExpItem key={eduction.id} item={eduction} />
              ))}
            </ul>
          </div>
          <div className={styles.eduExp}>
            <header>
              <span>
                <div className={styles.eduIcon}>
                  <School />
                </div>
              </span>
              <h3>Work Experience</h3>
            </header>
            <ul>
              {cv.experience.map((eduction) => (
                <EduExpItem key={eduction.id} item={eduction} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CV;
