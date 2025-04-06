import { projects, otherProjects } from "../../data";
import styles from "./ProjectList.module.css";
import ProjectCardOther from "./ProjectCardOther";
import FeaturedProject from "./FeaturedProject";
import SectionTitle from "../../ui/titles/SectionTitle";
import SectionSubtitle from "../../ui/titles/SectionSubtitle";

function ProjectList() {
  return (
    <section data-section="vier" className={styles.projectListSection}>
      <div className={styles.lstSctnWrppr}>
        <SectionTitle title="My Work" isPoint />

        <ul className={styles.projectList}>
          {projects.map((project) => (
            <FeaturedProject key={project.id} project={project} />
          ))}
        </ul>
      </div>

      <div className={styles.otherProjectsContainer}>
        <SectionSubtitle
          title="Other Notable Projects"
          subtitle="view the archive"
          link="/archive"
        />

        <ul className={styles.otherProjectsList}>
          {otherProjects.map((project) => (
            <ProjectCardOther key={project.id} project={project} />
          ))}
        </ul>

        {otherProjects.length > 6 && <button>Show more</button>}
      </div>
    </section>
  );
}

export default ProjectList;
