import PageFeaturedProject from "./PageFeaturedProject";
import styles from "./PageProjectList.module.css";
import ProjectFilter from "./ProjectFilter";

import { projects } from "../../lib/store/data";

function PageProjectList() {
  return (
    <div className={styles.container}>
      <ProjectFilter />
      <ul className={styles.projectList}>
        {projects.map((project) => (
          <PageFeaturedProject key={project.id} project={project} />
        ))}
      </ul>
    </div>
  );
}

export default PageProjectList;
