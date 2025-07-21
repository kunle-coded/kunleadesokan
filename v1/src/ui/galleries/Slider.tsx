import styles from "./Slider.module.css";
import { useSlider } from "../../contexts/SliderContext";

function Slider() {
  const {
    currentSlide,
    slidePosition,
    isTransitioning,
    handleSlide,
    handleDots,
  } = useSlider();

  const sliderStyle = {
    left: "0px",
    transform: `translateX(-${slidePosition / 100}%)`,
    transition: isTransitioning ? "transform 0.6s ease-in-out" : "none",
  };

  return (
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
  );
}

export default Slider;
