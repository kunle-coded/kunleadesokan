import SectionTitle from "../../ui/titles/SectionTitle";
import styles from "./PageHero.module.css";

interface PageHeroProps {
  title: string;
  subtitleOne: string;
  subtitleTwo?: string;
}

function PageHero({ title, subtitleOne, subtitleTwo }: PageHeroProps) {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroWrapper}>
        <SectionTitle title={title} isPoint />
        <div className={styles.subtitle}>
          <p>{subtitleOne}</p>
          <p>{subtitleTwo}</p>
        </div>
      </div>
    </div>
  );
}

export default PageHero;
