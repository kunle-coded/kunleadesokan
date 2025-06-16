import { useState } from "react";
import styles from "./SingleProject.module.css";
// import useAnimationFrame from "../../lib/hooks/useAnimationFrame";

function SingleProject() {
  const STEP = 10005;
  const MAX = 40020;
  const [currentSlide, setCurrentSlide] = useState(1);
  const [slidePosition, setSlidePosition] = useState(STEP);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // const { handleSlide, isTransitioning, slidePosition } = useAnimationFrame();

  const sliderStyle = {
    left: "0px",
    transform: `translateX(-${slidePosition / 100}%)`,
    transition: isTransitioning ? "transform 0.6s ease-in-out" : "none",
  };

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
              <a
                href="http://www.kooslanguages.com.ng"
                target="_blank"
                rel="noopener"
              >
                www.kooslanguages.com
              </a>
            </h5>
            <h6>Koos Languages</h6>
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
                <strong>
                  Koos Languages is a language training and services based in
                  Abuja, Nigeria.
                </strong>
              </p>
              <p>
                They needed a modern web presence to enhance their online
                visibility and streamline the enrollment process.
              </p>
            </div>
            <div className={`${styles.col} ${styles.col2}`}>
              <p>
                Their existing website was outdated and not responsive, which
                impacted user experience, especially for mobile visitors. They
                approached me to develop a new platform that would improve their
                digital experience and better reflect their high standards of
                educational services.
              </p>
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
              Modern look and feel <br />
              better user experience
            </h6>
            <div className={styles.projectPages}>
              <p>
                {" "}
                — Home
                <br />
                — Work
                <br />
                — Studio
                <br />— Journal
              </p>
            </div>
          </div>
        </section>
        <section className={`${styles.twoCol} ${styles.singleCol}`}>
          <div className={styles.projectSummary}>
            <div className={styles.col}>
              <p>
                I developed a user-friendly, responsive platform that simplifies
                language learning through a clean interface and structured
                content.
              </p>
            </div>
            <div className={`${styles.col} ${styles.col2}`}>
              <p>
                Designed with accessibility at its core to support learners
                across various devices and backgrounds, it focused on
                simplicity, clarity, and multilingual support to enhance
                engagement and ease of use.
              </p>
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
              Studio Mega's own branding set them apart from other agencies.
            </h6>
            <p>
              Vibrant colors, unique blending modes, and hover overlays can be
              seen here and in hoverable content throughout the website.
            </p>
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
                — Redesign
                <br />
                — Scalability
                <br />
                — Responsiveness
                <br />— User Experience
              </p>
            </div>
          </div>
        </section>
        {/* Project Summary */}
        <section className={`${styles.twoCol} ${styles.singleCol}`}>
          <div className={styles.projectSummary}>
            <div className={styles.col}>
              <p>
                The project involved a complete redesign and rebuild of the
                website using React for the frontend to ensure a smooth,
                responsive, and dynamic user experience. I worked closely with
                the client to identify key functionality, such as an interactive
                course catalog and an intuitive contact form, ensuring the
                platform catered to both prospective students and partners.
              </p>
            </div>
            <div className={`${styles.col} ${styles.col2}`}>
              <p>
                The site was built with scalability and performance in mind,
                integrating modern frameworks like React, as well as responsive
                design principles to ensure consistency across all devices. A
                key element of the project was implementing a robust course
                management system to help students easily browse available
                language courses and register online.
              </p>
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
                — User registration
                <br />
                — Payment
                <br />
                — Low budget
                <br />— Spam and security
              </p>
            </div>
          </div>
        </section>
        {/* Project Summary */}
        <section className={`${styles.twoCol} ${styles.singleCol}`}>
          <div className={styles.projectSummary}>
            <div className={styles.col}>
              <p>
                One of the biggest challenges was ensuring the website supported
                multilingual functionality, as Koos Language Centre serves a
                diverse audience. Additionally, optimizing the user interface
                for both mobile and desktop users required careful consideration
                to maintain a high-quality user experience across different
                screen sizes.
              </p>
            </div>
            <div className={`${styles.col} ${styles.col2}`}>
              <p>
                One of the biggest challenges was ensuring the website supported
                multilingual functionality, as Koos Language Centre serves a
                diverse audience. Additionally, optimizing the user interface
                for both mobile and desktop users required careful consideration
                to maintain a high-quality user experience across different
                screen sizes.
              </p>
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
                — Responsive design
                <br />
                — User-friendly
                <br />
                — Easy-to-navigate
                <br />— Backend app
              </p>
            </div>
          </div>
        </section>
        {/* Project Summary */}
        <section className={`${styles.twoCol} ${styles.singleCol}`}>
          <div className={styles.projectSummary}>
            <div className={styles.col}>
              <p>
                To address the multilingual requirement, I implemented a dynamic
                translation system that allowed seamless switching between
                languages. I also focused on creating a clean, intuitive design
                that reduced user friction and made information easily
                accessible. Key features include:
              </p>
            </div>
            <div className={`${styles.col} ${styles.col2}`}>
              <p>
                To address the multilingual requirement, I implemented a dynamic
                translation system that allowed seamless switching between
                languages. I also focused on creating a clean, intuitive design
                that reduced user friction and made information easily
                accessible. Key features include:
              </p>
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
              Koos Languages' online <br /> presence improved significantly
            </h6>
            <p>
              Mobile user engagement increased by 40%, and online course
              registrations grew by 30% within the first three months of the
              site launch. The client was particularly impressed with how the
              new design elevated their brand image and made their services more
              accessible to a wider audience.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SingleProject;
