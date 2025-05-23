import { useRef } from "react";
import { Project } from "../../lib/types/types";
import styles from "./FeaturedProject.module.css";
import useReveal from "../../lib/hooks/useReveal";
import LinkButton from "../../ui/buttons/LinkButton";

interface FeaturedProjectProps {
  project: Project;
}

function FeaturedProject({ project }: FeaturedProjectProps) {
  const projectItemRef = useRef(null);

  useReveal(projectItemRef);

  return (
    <li ref={projectItemRef} className={`section ${styles.projectListItem}`}>
      <div className={styles.projectContainer}>
        <div className={styles.projectHeader}>
          <p className={styles.projectLabel}>Featured project</p>
          <div className={styles.projectMeta}>
            <ul className={styles.projectStackList}>
              {project.stack.map((stackItem, index) => (
                <li key={index}>{stackItem}</li>
              ))}
            </ul>
            <ul className={styles.projectLink}>
              <li>
                <a
                  href="https://github.com/kunle-coded/project-name"
                  aria-label="GitHub Link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-github"
                  >
                    <title>GitHub</title>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://project-website.com/"
                  aria-label="External Link"
                  className="external"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-external-link"
                  >
                    <title>External Link</title>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.projectBody}>
          <div className={styles.projectDetails}>
            <div className={styles.projectDetailsContainer}>
              <p className={styles.projectNumber}>0{project.id}.</p>
              <h2 className={styles.projectName}>{project.name}</h2>
              <LinkButton label="Case Study" link="/project-name" />
              <p className={styles.projectDescription}>{project.intent}</p>
            </div>
          </div>
          <div className={styles.projectImage}>
            <div className={styles.imageCover}>
              <div className={`${styles.projectImageWrapper} ${styles.img}`}>
                <div className={styles.imageInnerWrapper}>
                  <img
                    alt=""
                    role="presentation"
                    aria-hidden="true"
                    src={project.images[0]}
                    style={{
                      maxWidth: "100%",
                      display: "block",
                      position: "static",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.projectFooter}>
          <ul className={styles.paginationDots}>
            <li>
              <button></button>
            </li>
            <li>
              <button></button>
            </li>
            <li>
              <button></button>
            </li>
            <li>
              <button></button>
            </li>
          </ul>

          <div className={styles.slideProgress}>
            <p>
              1 <span>/</span> 6
            </p>
            <hr />
            <div className={styles.slideButtons}>
              <button
                id="previousSlide"
                data-inactive="true"
                aria-disabled="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 7L9 12L14 17"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                id="nextSlide"
                data-inactive="false"
                aria-disabled="false"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 17L15 12L10 7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default FeaturedProject;
