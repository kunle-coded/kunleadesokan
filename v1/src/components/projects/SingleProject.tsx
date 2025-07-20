import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import styles from "./SingleProject.module.css";
// import useAnimationFrame from "../../lib/hooks/useAnimationFrame";
import { projects } from "../../lib/store/data";
import { Project } from "../../lib/types/types";

function SingleProject() {
  const STEP = 10005;
  const MAX = 40020;
  const [project, setProject] = useState<Project | null>(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [slidePosition, setSlidePosition] = useState(STEP);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const location = useLocation();
  // const { handleSlide, isTransitioning, slidePosition } = useAnimationFrame();

  const sliderStyle = {
    left: "0px",
    transform: `translateX(-${slidePosition / 100}%)`,
    transition: isTransitioning ? "transform 0.6s ease-in-out" : "none",
  };

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

  const handleSlide = (direction: string) => {
    if (direction === "next") {
      setCurrentSlide((prev) => prev + 1);
      setSlidePosition((prev) => prev + STEP);

      if (currentSlide === 4) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentSlide(1);
          setSlidePosition(STEP);
        }, 600);

        setTimeout(() => setIsTransitioning(true), 700);
      }
    } else {
      setCurrentSlide((prev) => prev - 1);
      setSlidePosition((prev) => prev - STEP);

      if (currentSlide === 1) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentSlide(4);
          setSlidePosition(MAX);
        }, 500);

        setTimeout(() => setIsTransitioning(true), 700);
      }
    }
  };

  const handleDots = (event: React.MouseEvent<HTMLOListElement>) => {
    const target = event.target as HTMLElement;

    if (target.tagName !== "LI") return;

    const targetIndex = target.tabIndex;

    if (targetIndex === currentSlide) return;

    setCurrentSlide(targetIndex);
    setSlidePosition(STEP * targetIndex);
  };

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
          <div className={styles.mediaGallery}>
            <div className={styles.imageViewport}>
              <div className={styles.imageSlider} style={sliderStyle}>
                {/* Clone of last slide */}
                <img
                  src="/src/assets/img/others/sample.png"
                  alt="Home"
                  style={{ left: "0%" }}
                />

                {/* Real slides */}
                <img
                  src="/src/assets/img/koos/img.png"
                  alt="Home"
                  aria-selected={currentSlide === 1}
                  style={{ left: "100.05%" }}
                />
                <img
                  src="/src/assets/img/arie/img1.png"
                  alt="Home"
                  aria-selected={currentSlide === 2}
                  style={{ left: "200.01%" }}
                />
                <img
                  src="/src/assets/img/others/forkify.png"
                  alt="Home"
                  aria-selected={currentSlide === 3}
                  style={{ left: "300.15%" }}
                />
                <img
                  src="/src/assets/img/others/sample.png"
                  alt="Home"
                  aria-selected={currentSlide === 4}
                  style={{ left: "400.20%" }}
                />
                {/* Clone of first slide */}
                <img
                  src="/src/assets/img/koos/img.png"
                  alt="Home"
                  style={{ left: "500.25%" }}
                />
              </div>
              <div className={styles.imageViewpo}></div>
              <div className={styles.imageViewpo}></div>
            </div>
            <button
              className={`${styles.previousNextBtn} ${styles.previous}`}
              onClick={() => handleSlide("previous")}
            ></button>
            <button
              className={`${styles.previousNextBtn} ${styles.next}`}
              onClick={() => handleSlide("next")}
            ></button>
            <ol className={styles.sliderDots} onClick={handleDots}>
              <li
                className={styles.dot}
                aria-selected={currentSlide === 1}
                tabIndex={1}
                aria-label="Page dot 1"
                {...(currentSlide === 1 ? { "aria-current": "step" } : {})}
              ></li>
              <li
                className={styles.dot}
                aria-selected={currentSlide === 2}
                tabIndex={2}
                aria-label="Page dot 2"
                {...(currentSlide === 2 ? { "aria-current": "step" } : {})}
              ></li>
              <li
                className={styles.dot}
                aria-selected={currentSlide === 3}
                tabIndex={3}
                aria-label="Page dot 3"
                {...(currentSlide === 3 ? { "aria-current": "step" } : {})}
              ></li>
              <li
                className={styles.dot}
                aria-selected={currentSlide === 4}
                tabIndex={4}
                aria-label="Page dot 4"
                {...(currentSlide === 4 ? { "aria-current": "step" } : {})}
              ></li>
            </ol>
          </div>
          <div className={styles.info}>
            <div className={styles.pagination}>
              <button
                className={styles.btnGalleryLeft}
                role="button"
                aria-label="Previous"
                onClick={() => handleSlide("previous")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="8"
                  viewBox="0 0 19 8"
                >
                  <path d="M1.94974747,3 L19,3 L19,4 L1.70710678,4 L4.24264069,6.53553391 L3.53553391,7.24264069 L-2.22044605e-16,3.62132034 L3.53553391,0 L4.24264069,0.707106781 L1.94974747,3 Z"></path>
                </svg>
              </button>{" "}
              <span className={styles.current}>
                {currentSlide > 4 ? "1" : currentSlide < 1 ? 1 : currentSlide}
              </span>{" "}
              / <span className={styles.total}>4</span>{" "}
              <button
                className={styles.btnGalleryRight}
                role="button"
                aria-label="Next"
                onClick={() => handleSlide("next")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="8"
                  viewBox="0 0 19 8"
                >
                  <path
                    d="M1.94974747,3 L19,3 L19,4 L1.70710678,4 L4.24264069,6.53553391 L3.53553391,7.24264069 L-2.22044605e-16,3.62132034 L3.53553391,0 L4.24264069,0.707106781 L1.94974747,3 Z"
                    transform="matrix(-1 0 0 1 19 0)"
                  ></path>
                </svg>
              </button>
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
          <div className={styles.mediaGallery}>
            <div className={styles.imageViewport}>
              <div className={styles.imageSlider} style={sliderStyle}>
                {/* Clone of last slide */}
                <img
                  src="/src/assets/img/others/sample.png"
                  alt="Home"
                  style={{ left: "0%" }}
                />

                {/* Real slides */}
                <img
                  src="/src/assets/img/koos/img.png"
                  alt="Home"
                  aria-selected={currentSlide === 1}
                  style={{ left: "100.05%" }}
                />
                <img
                  src="/src/assets/img/arie/img1.png"
                  alt="Home"
                  aria-selected={currentSlide === 2}
                  style={{ left: "200.01%" }}
                />
                <img
                  src="/src/assets/img/others/forkify.png"
                  alt="Home"
                  aria-selected={currentSlide === 3}
                  style={{ left: "300.15%" }}
                />
                <img
                  src="/src/assets/img/others/sample.png"
                  alt="Home"
                  aria-selected={currentSlide === 4}
                  style={{ left: "400.20%" }}
                />
                {/* Clone of first slide */}
                <img
                  src="/src/assets/img/koos/img.png"
                  alt="Home"
                  style={{ left: "500.25%" }}
                />
              </div>
              <div className={styles.imageViewpo}></div>
              <div className={styles.imageViewpo}></div>
            </div>
            <button
              className={`${styles.previousNextBtn} ${styles.previous}`}
              onClick={() => handleSlide("previous")}
            ></button>
            <button
              className={`${styles.previousNextBtn} ${styles.next}`}
              onClick={() => handleSlide("next")}
            ></button>
            <ol className={styles.sliderDots} onClick={handleDots}>
              <li
                className={styles.dot}
                aria-selected={currentSlide === 1}
                tabIndex={1}
                aria-label="Page dot 1"
                {...(currentSlide === 1 ? { "aria-current": "step" } : {})}
              ></li>
              <li
                className={styles.dot}
                aria-selected={currentSlide === 2}
                tabIndex={2}
                aria-label="Page dot 2"
                {...(currentSlide === 2 ? { "aria-current": "step" } : {})}
              ></li>
              <li
                className={styles.dot}
                aria-selected={currentSlide === 3}
                tabIndex={3}
                aria-label="Page dot 3"
                {...(currentSlide === 3 ? { "aria-current": "step" } : {})}
              ></li>
              <li
                className={styles.dot}
                aria-selected={currentSlide === 4}
                tabIndex={4}
                aria-label="Page dot 4"
                {...(currentSlide === 4 ? { "aria-current": "step" } : {})}
              ></li>
            </ol>
          </div>
          <div className={styles.info}>
            <div className={styles.pagination}>
              <button
                className={styles.btnGalleryLeft}
                role="button"
                aria-label="Previous"
                onClick={() => handleSlide("previous")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="8"
                  viewBox="0 0 19 8"
                >
                  <path d="M1.94974747,3 L19,3 L19,4 L1.70710678,4 L4.24264069,6.53553391 L3.53553391,7.24264069 L-2.22044605e-16,3.62132034 L3.53553391,0 L4.24264069,0.707106781 L1.94974747,3 Z"></path>
                </svg>
              </button>{" "}
              <span className={styles.current}>
                {currentSlide > 4 ? "1" : currentSlide < 1 ? 1 : currentSlide}
              </span>{" "}
              / <span className={styles.total}>4</span>{" "}
              <button
                className={styles.btnGalleryRight}
                role="button"
                aria-label="Next"
                onClick={() => handleSlide("next")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="8"
                  viewBox="0 0 19 8"
                >
                  <path
                    d="M1.94974747,3 L19,3 L19,4 L1.70710678,4 L4.24264069,6.53553391 L3.53553391,7.24264069 L-2.22044605e-16,3.62132034 L3.53553391,0 L4.24264069,0.707106781 L1.94974747,3 Z"
                    transform="matrix(-1 0 0 1 19 0)"
                  ></path>
                </svg>
              </button>
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
          <div className={styles.mediaGallery}>
            <div className={styles.imageViewport}>
              <div className={styles.imageSlider} style={sliderStyle}>
                {/* Clone of last slide */}
                <img
                  src="/src/assets/img/others/sample.png"
                  alt="Home"
                  style={{ left: "0%" }}
                />

                {/* Real slides */}
                <img
                  src="/src/assets/img/koos/img.png"
                  alt="Home"
                  aria-selected={currentSlide === 1}
                  style={{ left: "100.05%" }}
                />
                <img
                  src="/src/assets/img/arie/img1.png"
                  alt="Home"
                  aria-selected={currentSlide === 2}
                  style={{ left: "200.01%" }}
                />
                <img
                  src="/src/assets/img/others/forkify.png"
                  alt="Home"
                  aria-selected={currentSlide === 3}
                  style={{ left: "300.15%" }}
                />
                <img
                  src="/src/assets/img/others/sample.png"
                  alt="Home"
                  aria-selected={currentSlide === 4}
                  style={{ left: "400.20%" }}
                />
                {/* Clone of first slide */}
                <img
                  src="/src/assets/img/koos/img.png"
                  alt="Home"
                  style={{ left: "500.25%" }}
                />
              </div>
              <div className={styles.imageViewpo}></div>
              <div className={styles.imageViewpo}></div>
            </div>
            <button
              className={`${styles.previousNextBtn} ${styles.previous}`}
              onClick={() => handleSlide("previous")}
            ></button>
            <button
              className={`${styles.previousNextBtn} ${styles.next}`}
              onClick={() => handleSlide("next")}
            ></button>
            <ol className={styles.sliderDots} onClick={handleDots}>
              <li
                className={styles.dot}
                aria-selected={currentSlide === 1}
                tabIndex={1}
                aria-label="Page dot 1"
                {...(currentSlide === 1 ? { "aria-current": "step" } : {})}
              ></li>
              <li
                className={styles.dot}
                aria-selected={currentSlide === 2}
                tabIndex={2}
                aria-label="Page dot 2"
                {...(currentSlide === 2 ? { "aria-current": "step" } : {})}
              ></li>
              <li
                className={styles.dot}
                aria-selected={currentSlide === 3}
                tabIndex={3}
                aria-label="Page dot 3"
                {...(currentSlide === 3 ? { "aria-current": "step" } : {})}
              ></li>
              <li
                className={styles.dot}
                aria-selected={currentSlide === 4}
                tabIndex={4}
                aria-label="Page dot 4"
                {...(currentSlide === 4 ? { "aria-current": "step" } : {})}
              ></li>
            </ol>
          </div>
          <div className={styles.info}>
            <div className={styles.pagination}>
              <button
                className={styles.btnGalleryLeft}
                role="button"
                aria-label="Previous"
                onClick={() => handleSlide("previous")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="8"
                  viewBox="0 0 19 8"
                >
                  <path d="M1.94974747,3 L19,3 L19,4 L1.70710678,4 L4.24264069,6.53553391 L3.53553391,7.24264069 L-2.22044605e-16,3.62132034 L3.53553391,0 L4.24264069,0.707106781 L1.94974747,3 Z"></path>
                </svg>
              </button>{" "}
              <span className={styles.current}>
                {currentSlide > 4 ? "1" : currentSlide < 1 ? 1 : currentSlide}
              </span>{" "}
              / <span className={styles.total}>4</span>{" "}
              <button
                className={styles.btnGalleryRight}
                role="button"
                aria-label="Next"
                onClick={() => handleSlide("next")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="8"
                  viewBox="0 0 19 8"
                >
                  <path
                    d="M1.94974747,3 L19,3 L19,4 L1.70710678,4 L4.24264069,6.53553391 L3.53553391,7.24264069 L-2.22044605e-16,3.62132034 L3.53553391,0 L4.24264069,0.707106781 L1.94974747,3 Z"
                    transform="matrix(-1 0 0 1 19 0)"
                  ></path>
                </svg>
              </button>
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
          <div className={styles.mediaGallery}>
            <div className={styles.imageViewport}>
              <div className={styles.imageSlider} style={sliderStyle}>
                {/* Clone of last slide */}
                <img
                  src="/src/assets/img/others/sample.png"
                  alt="Home"
                  style={{ left: "0%" }}
                />

                {/* Real slides */}
                <img
                  src="/src/assets/img/koos/img.png"
                  alt="Home"
                  aria-selected={currentSlide === 1}
                  style={{ left: "100.05%" }}
                />
                <img
                  src="/src/assets/img/arie/img1.png"
                  alt="Home"
                  aria-selected={currentSlide === 2}
                  style={{ left: "200.01%" }}
                />
                <img
                  src="/src/assets/img/others/forkify.png"
                  alt="Home"
                  aria-selected={currentSlide === 3}
                  style={{ left: "300.15%" }}
                />
                <img
                  src="/src/assets/img/others/sample.png"
                  alt="Home"
                  aria-selected={currentSlide === 4}
                  style={{ left: "400.20%" }}
                />
                {/* Clone of first slide */}
                <img
                  src="/src/assets/img/koos/img.png"
                  alt="Home"
                  style={{ left: "500.25%" }}
                />
              </div>
              <div className={styles.imageViewpo}></div>
              <div className={styles.imageViewpo}></div>
            </div>
            <button
              className={`${styles.previousNextBtn} ${styles.previous}`}
              onClick={() => handleSlide("previous")}
            ></button>
            <button
              className={`${styles.previousNextBtn} ${styles.next}`}
              onClick={() => handleSlide("next")}
            ></button>
            <ol className={styles.sliderDots} onClick={handleDots}>
              <li
                className={styles.dot}
                aria-selected={currentSlide === 1}
                tabIndex={1}
                aria-label="Page dot 1"
                {...(currentSlide === 1 ? { "aria-current": "step" } : {})}
              ></li>
              <li
                className={styles.dot}
                aria-selected={currentSlide === 2}
                tabIndex={2}
                aria-label="Page dot 2"
                {...(currentSlide === 2 ? { "aria-current": "step" } : {})}
              ></li>
              <li
                className={styles.dot}
                aria-selected={currentSlide === 3}
                tabIndex={3}
                aria-label="Page dot 3"
                {...(currentSlide === 3 ? { "aria-current": "step" } : {})}
              ></li>
              <li
                className={styles.dot}
                aria-selected={currentSlide === 4}
                tabIndex={4}
                aria-label="Page dot 4"
                {...(currentSlide === 4 ? { "aria-current": "step" } : {})}
              ></li>
            </ol>
          </div>
          <div className={styles.info}>
            <div className={styles.pagination}>
              <button
                className={styles.btnGalleryLeft}
                role="button"
                aria-label="Previous"
                onClick={() => handleSlide("previous")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="8"
                  viewBox="0 0 19 8"
                >
                  <path d="M1.94974747,3 L19,3 L19,4 L1.70710678,4 L4.24264069,6.53553391 L3.53553391,7.24264069 L-2.22044605e-16,3.62132034 L3.53553391,0 L4.24264069,0.707106781 L1.94974747,3 Z"></path>
                </svg>
              </button>{" "}
              <span className={styles.current}>
                {currentSlide > 4 ? "1" : currentSlide < 1 ? 1 : currentSlide}
              </span>{" "}
              / <span className={styles.total}>3</span>{" "}
              <button
                className={styles.btnGalleryRight}
                role="button"
                aria-label="Next"
                onClick={() => handleSlide("next")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="8"
                  viewBox="0 0 19 8"
                >
                  <path
                    d="M1.94974747,3 L19,3 L19,4 L1.70710678,4 L4.24264069,6.53553391 L3.53553391,7.24264069 L-2.22044605e-16,3.62132034 L3.53553391,0 L4.24264069,0.707106781 L1.94974747,3 Z"
                    transform="matrix(-1 0 0 1 19 0)"
                  ></path>
                </svg>
              </button>
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
