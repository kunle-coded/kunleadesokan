import { useRef } from "react";
import styles from "./ArchiveBody.module.css";
import useReveal from "../../lib/hooks/useReveal";

function ArchiveBody() {
  const itemRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  //   const itemRef = useRef(null);
  const { isIntersecting: intersecting0 } = useReveal(itemRefs[0]);
  const { isIntersecting: intersecting1 } = useReveal(itemRefs[1]);
  const { isIntersecting: intersecting2 } = useReveal(itemRefs[2]);
  const { isIntersecting: intersecting3 } = useReveal(itemRefs[3]);
  const { isIntersecting: intersecting4 } = useReveal(itemRefs[4]);
  const { isIntersecting: intersecting5 } = useReveal(itemRefs[5]);
  const { isIntersecting: intersecting6 } = useReveal(itemRefs[6]);
  const { isIntersecting: intersecting7 } = useReveal(itemRefs[7]);
  const { isIntersecting: intersecting8 } = useReveal(itemRefs[8]);
  const { isIntersecting: intersecting9 } = useReveal(itemRefs[9]);

  const intersectArr = [
    intersecting0,
    intersecting1,
    intersecting2,
    intersecting3,
    intersecting4,
    intersecting5,
    intersecting6,
    intersecting7,
    intersecting8,
    intersecting9,
  ];

  return (
    <section className={`section ${styles.container}`}>
      <div className={styles.archiveContainer}>
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Title</th>
              <th className={styles.hideMobile}>Made at</th>
              <th className={styles.hideMobile}>Built with</th>
              <th>Link</th>
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: 10 }, (_, i) => (
              <tr
                ref={itemRefs[i]}
                className={`text ${intersectArr[i] ? "textReveal" : ""}`}
              >
                <td className={` ${styles.highlight} ${styles.year}`}>2025</td>
                <td className={` ${styles.title}`}>
                  Harvard Business School Design System
                </td>
                <td className={` ${styles.company} ${styles.hideMobile}`}>
                  <span>Upstatement</span>
                </td>
                <td className={`${styles.techStack} ${styles.hideMobile}`}>
                  <span>
                    React <span className={styles.separator}>·</span>
                  </span>
                  <span>
                    TypeScript <span className={styles.separator}>·</span>
                  </span>
                  <span>
                    Node.js <span className={styles.separator}>·</span>
                  </span>
                  <span>Tailwind CSS</span>
                </td>
                <td className={styles.links}>
                  <div>
                    <a
                      href="https://project-website.com/"
                      aria-label="External Link"
                      className="external"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-external-link"
                      >
                        <title>External Link</title>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                    <a
                      href="https://github.com/kunle-coded/project-name"
                      aria-label="GitHub Link"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-github"
                      >
                        <title>GitHub</title>
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ height: "1200px" }}></div>
    </section>
  );
}

export default ArchiveBody;
