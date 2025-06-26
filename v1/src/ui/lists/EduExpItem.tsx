import { Education } from "../../lib/types/types";
import styles from "./EduExpItem.module.css";

interface EduExpItemProps {
  item: Education;
}

function EduExpItem({ item }: EduExpItemProps) {
  return (
    <li className={styles.itemWrapper}>
      <div className={styles.details}>
        <p className={styles.title}>{item.institution} </p>
        <p className={styles.desc}>{item.title}</p>
      </div>
      <div className={styles.period}>
        <p>{item.period}</p>
      </div>
    </li>
  );
}

export default EduExpItem;
