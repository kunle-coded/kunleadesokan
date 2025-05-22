import { useState } from "react";
import styles from "./ProjectFilter.module.css";

function ProjectFilter() {
  const [isFilter, setIsFilter] = useState(false);
  const [currentFilter, setCurrentFilter] = useState("All");

  function handleDropown() {
    setIsFilter((prevState) => !prevState);
  }

  function handleFilter(selected: string) {
    setCurrentFilter(selected);

    if (isFilter) {
      setIsFilter(false);
    }
  }

  return (
    <header className={styles.filterContainer}>
      <div className={styles.filterWrapper}>
        <p className={styles.filterLabel}>Filter by</p>
        <div className={styles.mobileFilter}>
          <div className={styles.filterDisplay}>
            <button
              role="button"
              aria-selected={currentFilter === "All"}
              className={styles.allFilter}
              onClick={() => handleFilter("All")}
            >
              All
              <span>08</span>
            </button>
            <button
              role="button"
              aria-selected={currentFilter !== "All"}
              className={styles.currentFilter}
              onClick={handleDropown}
            >
              {currentFilter === "All" ? "Category" : currentFilter}
              {currentFilter !== "All" && <span>02</span>}
            </button>
          </div>

          <ul
            className={`${styles.filterDropdown} ${
              isFilter ? styles.showDropdown : ""
            }`}
          >
            <li>
              <button
                role="button"
                onClick={() => handleFilter("Web Development")}
              >
                Web Development
              </button>
            </li>
            <li>
              <button
                role="button"
                onClick={() => handleFilter("App Development")}
              >
                App Development
              </button>
            </li>
            <li>
              <button
                role="button"
                onClick={() => handleFilter("UX/UI Design")}
              >
                UX/UI Design
              </button>
            </li>
          </ul>
        </div>
        <div className={styles.desktopFilter}>
          <ul className={styles.filterOptions}>
            <li>
              <button
                role="button"
                aria-selected={currentFilter === "All"}
                onClick={() => handleFilter("All")}
              >
                All
                <span>08</span>
              </button>
            </li>
            <li>
              <button
                role="button"
                aria-selected={currentFilter === "Web Development"}
                onClick={() => handleFilter("Web Development")}
              >
                Web Development<span>04</span>
              </button>
            </li>
            <li>
              <button
                role="button"
                aria-selected={currentFilter === "App Development"}
                onClick={() => handleFilter("App Development")}
              >
                App Development<span>02</span>
              </button>
            </li>
            <li>
              <button
                role="button"
                aria-selected={currentFilter === "UX/UI Design"}
                onClick={() => handleFilter("UX/UI Design")}
              >
                UX/UI Design<span>02</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default ProjectFilter;
