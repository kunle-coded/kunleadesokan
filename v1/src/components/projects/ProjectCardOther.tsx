import { useRef } from "react";
import { Project } from "../../types/projectTypes";
import styles from "./ProjectCardOther.module.css";
import useReveal from "../../hooks/useReveal";

interface ProjectCardOtherProps {
  project: Project;
}

function ProjectCardOther({ project }: ProjectCardOtherProps) {
  const { name, shortDesc, stack, images } = project;

  const projectCardRef = useRef(null);
  useReveal(projectCardRef);

  return (
    <li ref={projectCardRef} className={`section ${styles.projectCard}`}>
      <div className={styles.projectCardInner}>
        <div className={styles.projectCardImg}>
          <img src={images[0]} alt="" />
        </div>
        <div className={styles.projectCardDetails}>
          <div className={styles.projectCardTitleContainer}>
            <h3 className={styles.projectCardTitle}>
              <a href="/project-link">{name}</a>
            </h3>
            <div className={styles.projectCardFolder}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.feather}
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
          </div>
          <div className={styles.projectDesc}>
            <p>{shortDesc}</p>
          </div>

          <footer>
            <ul className={styles.projectStack}>
              {stack.map((stackItem, index) => (
                <li key={index}>{stackItem}</li>
              ))}
            </ul>
          </footer>
        </div>
      </div>
    </li>
  );
}

export default ProjectCardOther;
