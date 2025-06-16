import styles from "./AboutPageHero.module.css";

function AboutPageHero() {
  return (
    <section className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={`${styles.contentCol} ${styles.contentText}`}>
          <div className={styles.textContainer}>
            <p>
              Building <span>Intuitive</span> <br /> <span>Experiences</span>,
              One Line of <br /> Code at a Time
            </p>
          </div>
        </div>
        <div className={`${styles.contentCol} ${styles.contentImg}`}>
          <img src="/src/assets/img/others/sample.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default AboutPageHero;
