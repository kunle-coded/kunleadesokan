import styles from "./SingleProject.module.css";

function SingleProject() {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <section className={styles.threeCol}>
          <div className={styles.credits}>
            credits Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellat, esse.
          </div>
          <div className={styles.summary}>
            summary Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sequi molestiae aliquid a ducimus ratione voluptates.
          </div>
        </section>
        <section className={styles.twoCol}></section>
      </div>
    </div>
  );
}

export default SingleProject;
