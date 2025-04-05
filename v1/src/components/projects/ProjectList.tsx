import { projects, otherProjects } from "../../data";
import styles from "./ProjectList.module.css";
// import SectionTitle from "../../ui/headings/SectionTitle";
// import SubSectionTitle from "../../ui/headings/SubSectionTitle";
import ProjectCardOther from "./ProjectCardOther";
// import Button from "../../ui/buttons/Button";
import FeaturedProject from "./FeaturedProject";
import { useRef } from "react";
import useReveal from "../../hooks/useReveal";
import SectionTitle from "../../ui/SectionTitle";

// import ProjectCardOne from './ProjectCardOneV1';
// import ProjectCardTwo from './ProjectCardTwoV1';
// import ProjectCardThree from './ProjectCardThreeV1';
// import useReveal from '../../hooks/useReveal';

function ProjectList() {
  const otherProjectsTitleRef = useRef(null);
  useReveal(otherProjectsTitleRef);

  return (
    <section data-section="vier" className={styles.projectListSection}>
      <div className={styles.lstSctnWrppr}>
        <SectionTitle title="My Work" isPoint />

        <ul className={styles.projectList}>
          {/* <ProjectCardOne project={projects[0]} />
          <ProjectCardTwo project={projects[1]} />
          <ProjectCardThree project={projects[0]} /> */}
          {projects.map((project) => (
            <FeaturedProject key={project.id} project={project} />
          ))}
        </ul>
      </div>

      <div className={styles.otherProjectsContainer}>
        <div ref={otherProjectsTitleRef} className="section">
          {/* <SubSectionTitle
            title="Other Projects"
            subtitle="View the archive"
            link="/archive"
          /> */}
        </div>

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
