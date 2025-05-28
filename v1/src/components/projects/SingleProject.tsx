import styles from "./SingleProject.module.css";

function SingleProject() {
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
                With simplicity, flexibility, and maintainability in mind we
                built a website uniquely&nbsp;mega.
              </p>
            </div>
            <div className={`${styles.col} ${styles.col2}`}>
              <p>
                Powered by a Craft CMS back-end the website is easy to manage
                and update. There are several customizable content blocks that
                can be added and rearranged to make case studies be presented in
                a meaningful way.
              </p>
            </div>
          </div>
        </section>
        <section className={`${styles.twoCol} ${styles.projectGallery}`}>
          <div className={styles.mediaGallery}>
            <div className={styles.imageViewport}>
              <div className={styles.imageSlider}>
                <img
                  src="/src/assets/img/koos/img.png"
                  alt="Home"
                  aria-selected
                  className={styles.isNotSelected}
                />
                <img
                  src="/src/assets/img/arie/img1.png"
                  alt="Home"
                  aria-selected
                  className={styles.isSelected}
                />
              </div>
              <div className={styles.imageViewpo}></div>
              <div className={styles.imageViewpo}></div>
            </div>
            <button className={styles.btnPrevious}></button>
            <button className={styles.btnNext}></button>
            <ol className={styles.sliderDots}>
              <li
                className={styles.dot}
                aria-selected
                aria-label="Page dot 1"
                aria-current
              ></li>
              <li className={styles.dot} aria-label="Page dot 2"></li>
              <li className={styles.dot} aria-label="Page dot 3"></li>
              <li className={styles.dot} aria-label="Page dot 4"></li>
            </ol>
          </div>
          <div className={styles.info}>
            <div className={styles.pagination}>
              <button
                className={styles.btnGalleryLeft}
                role="button"
                aria-label="Previous"
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
              <span className={styles.current}>1</span> /{" "}
              <span className={styles.total}>4</span>{" "}
              <button
                className={styles.btnGalleryRight}
                role="button"
                aria-label="Next"
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
              Start with an idea <br />
              and make it better
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
      </div>
    </div>
  );
}

export default SingleProject;
