import { useRef } from "react";
import styles from "./PageFeaturedProject.module.css";
import useReveal from "../../lib/hooks/useReveal";
import { Project } from "../../lib/types/types";
import Button from "../../ui/buttons/Button";
import { transformUrl } from "../../lib/helpers/utils";

interface ProjectProps {
  project: Project;
}

function PageFeaturedProject({ project }: ProjectProps) {
  const itemRef = useRef(null);
  const imgRef = useRef(null);
  const infoRef = useRef(null);

  useReveal(itemRef);
  const { isIntersecting } = useReveal(imgRef);
  // const { isIntersecting: infoIntersecting } = useReveal(infoRef);

  return (
    <li className={styles.container}>
      <div ref={itemRef} className={`section ${styles.itemWrapper}`}>
        <div ref={imgRef} className={styles.contentCol}>
          <div className={styles.projectDetails}>
            <div
              className={`${styles.shape} ${
                isIntersecting ? styles.shapeReveal : ""
              }`}
            ></div>
            <div className={styles.textsContainer}>
              <div className={styles.flexCol}>
                <h3
                  className={`${styles.projectTitle} ${
                    isIntersecting ? styles.titleReveal : ""
                  }`}
                >
                  {project.name}
                  <span>.</span>
                </h3>
                <div className={styles.flexContainer}>
                  <div className={styles.flexInner1}>
                    <p className={`text ${isIntersecting ? "textReveal" : ""}`}>
                      {project.overview}
                    </p>
                  </div>

                  <div className={styles.flexInner2}>
                    <p className={`text ${isIntersecting ? "textReveal" : ""}`}>
                      {project.intent}
                    </p>
                    <br />
                    <p className={`text ${isIntersecting ? "textReveal" : ""}`}>
                      {project.goal}
                    </p>
                  </div>
                </div>
              </div>
              <div className={`${styles.flexCol} ${styles.projectInfo}`}>
                <p>Client</p>
                <div ref={infoRef} className={styles.infoTextWrapper}>
                  <p className={styles.infoText}>{project.client}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.imgCol}>
          <div className={styles.projectImg}>
            <a href={`/work/${transformUrl(project.name)}?id=${project.id}`}>
              <div
                className={`${styles.imgContainer} ${
                  isIntersecting ? styles.imgReveal : ""
                }`}
              >
                <img
                  alt=""
                  role="presentation"
                  aria-hidden="true"
                  src={project.images[0]}
                  className={styles.img}
                />
              </div>
              <div className={styles.projectLinkWrapper}>
                <div className={styles.linkBtnContainer}>
                  <Button label="Case Study" />
                </div>
              </div>
            </a>
            <div ref={infoRef} className={styles.bottomInfo}>
              <div className={`${styles.flexCol} ${styles.projectInfo}`}>
                <p>Role</p>
                <div className={styles.infoTextWrapper}>
                  <p className={styles.infoText}>{project.role}</p>
                </div>
              </div>
              <div className={`${styles.flexCol} ${styles.projectInfo}`}>
                <p>Year</p>
                <div className={styles.infoTextWrapper}>
                  <p className={styles.infoText}>{project.year}</p>
                </div>
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
