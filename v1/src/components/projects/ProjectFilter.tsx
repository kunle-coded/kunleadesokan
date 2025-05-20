import { useState } from "react";
import styles from "./ProjectFilter.module.css";

function ProjectFilter() {
  const [isFilter, setIsFilter] = useState(false);

  function handleDropown() {
    setIsFilter((prevState) => !prevState);
  }

  return (
    <header className={styles.filterContainer}>
      <div className={styles.filterWrapper}>
        <p className={styles.filterLabel}>Filter by</p>
        <div className={styles.mobileFilter}>
          <div className={styles.filterDisplay}>
            <button
              role="button"
              className={`${styles.allFilter} ${styles.activeFilter}`}
            >
              All
              <span>08</span>
            </button>
            <button
              role="button"
              className={styles.currentFilter}
              onClick={handleDropown}
            >
              Category
            </button>
          </div>

          <ul
            className={`${styles.filterDropdown} ${
              isFilter ? styles.showDropdown : ""
            }`}
          >
            <li>
              <button>Web Development</button>
            </li>
            <li>
              <button>App Development</button>
            </li>
            <li>
              <button>UX/UI Design</button>
            </li>
          </ul>
        </div>
        <div className={styles.desktopFilter}>
          <button role="button" className={styles.allFilter}>
            All
            <span>08</span>
          </button>
          <ul className={styles.filterOptions}>
            <li>Web Development</li>
            <li>App Development</li>
            <li>UX/UI Design</li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default ProjectFilter;
