import { useRef } from 'react';
import { Project } from '../../types/projectTypes';
import styles from './ProjectCardOther.module.css';
import useReveal from '../../hooks/useReveal';

interface ProjectCardOtherProps {
  project: Project;
}

function ProjectCardOther({ project }: ProjectCardOtherProps) {
  const { name, shortDesc, stack, images } = project;

  const projectCardRef = useRef(null);
  useReveal(projectCardRef);

  return (
    <li ref={projectCardRef} className={`section ${styles.prjctCrdCntnr}`}>
      <div className={styles.prjctCrdCntnrInnr}>
        <div className={styles.prjctCrdImg}>
          <img src={images[0]} alt="" />
        </div>
        <div className={styles.prjctCrdDtls}>
          <div className={styles.prjctCrdTtlCntnr}>
            <h3 className={styles.prjctCrdTtl}>
              <a href="" target="_blank" rel="noopener noreferrer">
                {name}
              </a>
            </h3>
            <div className={styles.prjctCrdLnkCntnr}>
              <div className={styles.prjctCrdCnttLnk}>
                <svg
                  className={styles.btnArwSvg}
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    position: 'absolute',
                    inset: '0px',
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <path
                    d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className={styles.prjctCrdCnttDsc}>
            <p>{shortDesc}</p>
          </div>

          <footer>
            <ul className={styles.prjctStckLst}>
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
