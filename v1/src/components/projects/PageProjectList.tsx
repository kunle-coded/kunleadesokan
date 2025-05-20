import styles from "./PageProjectList.module.css";
import ProjectFilter from "./ProjectFilter";

function PageProjectList() {
  return (
    <section className={styles.container}>
      <ProjectFilter />
      <div>Projects go here</div>
    </section>
  );
}

export default PageProjectList;
