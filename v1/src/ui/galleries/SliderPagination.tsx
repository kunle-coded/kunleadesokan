import { useSlider } from "../../contexts/SliderContext";
import styles from "./SliderPagination.module.css";

function SliderPagination() {
  const { currentSlide, handleSlide } = useSlider();

  return (
    <div className={styles.sliderBtns}>
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
  );
}

export default SliderPagination;
