import { useRef } from "react";
import styles from "./PageFeaturedProject.module.css";
import useReveal from "../../lib/hooks/useReveal";
import { Project } from "../../lib/types/types";

interface ProjectProps {
  project: Project;
}

function PageFeaturedProject({ project }: ProjectProps) {
  const itemRef = useRef(null);

  useReveal(itemRef);

  return (
    <li className={styles.container}>
      <div ref={itemRef} className={`section ${styles.itemWrapper}`}>
        <div className={styles.contentCol}>
          <div className={styles.projectDetails}>
            <div className={styles.shape}></div>
            <div className={styles.textsContainer}>
              <div className={styles.flexCol}>
                <h3>
                  {project.name}
                  <span>.</span>
                </h3>
                <div className={styles.flexContainer}>
                  <div className={styles.flexInner1}>
                    <p>{project.overview}</p>
                  </div>

                  <div className={styles.flexInner2}>
                    <p>{project.intent}</p>
                    <br />
                    <p>{project.goal}</p>
                  </div>
                </div>
              </div>
              <div className={`${styles.flexCol} ${styles.projectInfo}`}>
                <p>Client</p>
                <p>{project.client}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.imgCol}>
          <div className={styles.projectImg}>
            <div className={styles.imgContainer}>
              <img
                alt=""
                role="presentation"
                aria-hidden="true"
                src={project.images[0]}
                className={styles.img}
              />
            </div>
            <div className={styles.bottomInfo}>
              <div className={`${styles.flexCol} ${styles.projectInfo}`}>
                <p>Role</p>
                <p>{project.role}</p>
              </div>
              <div className={`${styles.flexCol} ${styles.projectInfo}`}>
                <p>Year</p>
                <p>{project.year}</p>
              </div>
              <div className={styles.bottomLine}></div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default PageFeaturedProject;
