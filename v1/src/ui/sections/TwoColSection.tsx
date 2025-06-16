import styles from "./TwoColSection.module.css";

interface TwoColProps {
  title: string;
  body: string[];
}

function TwoColSection({ title, body }: TwoColProps) {
  return (
    <section className={styles.container}>
      <div className={styles.colWrapper}>
        <div className={styles.col}>
          <p>{title}</p>
        </div>
        <div className={styles.col}>
          {body.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TwoColSection;
