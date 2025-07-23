import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import styles from "./SingleProject.module.css";
// import useAnimationFrame from "../../lib/hooks/useAnimationFrame";
import { projects } from "../../lib/store/data";
import { Project } from "../../lib/types/types";
import Slider from "../../ui/galleries/Slider";
import SliderProvider from "../../contexts/SliderContext";
import SliderPagination from "../../ui/galleries/SliderPagination";

function SingleProject() {
  const [project, setProject] = useState<Project | null>(null);

  const location = useLocation();

  // const { handleSlide, isTransitioning, slidePosition } = useAnimationFrame();

  useEffect(() => {
    const projectId = location.search.split("=")[1];

    const proj = projects.find((project) => project.id === Number(projectId));
    if (proj) {
      setProject(proj);
    }
  }, [location.search]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <section className={styles.threeCol}>
          <div className={styles.credits}>
            <h5>
              <a href={project.externalLink} target="_blank" rel="noopener">
                {project.externalLink.split("//")[1]}
              </a>
            </h5>
            <h6>{project.name}</h6>
            <span className={styles.title}>Agency:</span>
            <span>House 16</span>
            <span className={styles.title}>Lead Front-end Developer:</span>
            <span>Kunle Adesokan</span>
            <span className={styles.title}>Lead Back-end Developer:</span>
            <span>Kunle Adesokan</span>
          </div>
          <div className={styles.summary}>
            <div className={styles.col}>
              <p>
                <strong>{project.projDetails.intro}</strong>
              </p>
              <p>{project.projDetails.need}</p>
            </div>
            <div className={`${styles.col} ${styles.col2}`}>
              <p>{project.projDetails.problem}</p>
            </div>
          </div>
        </section>
        <section className={`${styles.twoCol} ${styles.projectGallery}`}>
          <SliderProvider>
            <Slider />
            <div className={styles.info}>
              <div className={styles.pagination}>
                <SliderPagination />
              </div>

              <h6 className={styles.title}>
                {project.projDetails.outcomeTitle[0]} <br />
                {project.projDetails.outcomeTitle[1]}
              </h6>
              <div className={styles.projectPages}>
                <p>
                  {" "}
                  — {project.projDetails.outcomeGallery[0]}
                  <br />— {project.projDetails.outcomeGallery[1]}
                  <br />— {project.projDetails.outcomeGallery[2]}
                  <br />— {project.projDetails.outcomeGallery[3]}
                </p>
              </div>
            </div>
          </SliderProvider>
        </section>
        <section className={`${styles.twoCol} ${styles.singleCol}`}>
          <div className={styles.projectSummary}>
            <div className={styles.col}>
              <p>{project.projDetails.outcome[0]}</p>
            </div>
            <div className={`${styles.col} ${styles.col2}`}>
              <p>{project.projDetails.outcome[1]}</p>
            </div>
          </div>
        </section>
        {/* Project overview */}

        <section className={styles.projectImage}>
          <div className={styles.imgWrapper}>
            <img src="/src/assets/img/koos/img.png" alt="Home" />
          </div>
          <div className={styles.info}>
            <h6 className={styles.title}>
              {project.projDetails.interlude.title}
            </h6>
            <p>{project.projDetails.interlude.body}</p>
          </div>
        </section>

        {/* Project Execution */}
        <section className={`${styles.twoCol} ${styles.projectGallery}`}>
          <SliderProvider>
            <Slider />
            <div className={styles.info}>
              <div className={styles.pagination}>
                <SliderPagination />
              </div>

              <h6 className={styles.title}>Execution</h6>
              <div className={styles.projectPages}>
                <p>
                  {" "}
                  — {project.projDetails.executionList[0]}
                  <br />— {project.projDetails.executionList[1]}
                  <br />— {project.projDetails.executionList[2]}
                  <br />— {project.projDetails.executionList[3]}
                </p>
              </div>
            </div>
          </SliderProvider>
        </section>
        {/* Project Execution Summary */}
        <section className={`${styles.twoCol} ${styles.singleCol}`}>
          <div className={styles.projectSummary}>
            <div className={styles.col}>
              <p>{project.projDetails.execution[0]}</p>
            </div>
            <div className={`${styles.col} ${styles.col2}`}>
              <p>{project.projDetails.execution[1]}</p>
            </div>
          </div>
        </section>

        {/* Project challenges */}
        <section className={`${styles.twoCol} ${styles.projectGallery}`}>
          <SliderProvider>
            <Slider />
            <div className={styles.info}>
              <div className={styles.pagination}>
                <SliderPagination />
              </div>

              <h6 className={styles.title}>Challenges</h6>
              <div className={styles.projectPages}>
                <p>
                  {" "}
                  — {project.projDetails.challengesGallery[0]}
                  <br />— {project.projDetails.challengesGallery[1]}
                  <br />— {project.projDetails.challengesGallery[2]}
                  <br />— {project.projDetails.challengesGallery[3]}
                </p>
              </div>
            </div>
          </SliderProvider>
        </section>
        {/* Project Summary */}
        <section className={`${styles.twoCol} ${styles.singleCol}`}>
          <div className={styles.projectSummary}>
            <div className={styles.col}>
              <p>{project.projDetails.challenges[0]}</p>
            </div>
            <div className={`${styles.col} ${styles.col2}`}>
              <p>{project.projDetails.challenges[1]}</p>
            </div>
          </div>
        </section>

        {/* Project solutions */}
        <section className={`${styles.twoCol} ${styles.projectGallery}`}>
          <SliderProvider>
            <Slider />
            <div className={styles.info}>
              <div className={styles.pagination}>
                <SliderPagination />
              </div>

              <h6 className={styles.title}>Solutions</h6>
              <div className={styles.projectPages}>
                <p>
                  {" "}
                  — {project.projDetails.solutionsGallery[0]}
                  <br />— {project.projDetails.solutionsGallery[1]}
                  <br />— {project.projDetails.solutionsGallery[2]}
                  <br />— {project.projDetails.solutionsGallery[3]}
                </p>
              </div>
            </div>
          </SliderProvider>
        </section>
        {/* Project Summary */}
        <section className={`${styles.twoCol} ${styles.singleCol}`}>
          <div className={styles.projectSummary}>
            <div className={styles.col}>
              <p>{project.projDetails.solutions[0]}</p>
            </div>
            <div className={`${styles.col} ${styles.col2}`}>
              <p>{project.projDetails.solutions[1]}</p>
            </div>
          </div>
        </section>

        {/* Project image */}
        <section className={styles.projectImage}>
          <div className={styles.imgWrapper}>
            <img src="/src/assets/img/koos/img.png" alt="Home" />
          </div>
          <div className={styles.info}>
            <h6 className={styles.title}>
              {project.projDetails.result[0]} <br />{" "}
              {project.projDetails.result[1]}
            </h6>
            <p>{project.projDetails.resultSummary}</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SingleProject;
