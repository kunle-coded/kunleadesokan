import SectionTitle from "../../ui/titles/SectionTitle";
import styles from "./ArchiveHeader.module.css";

function ArchiveHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <SectionTitle title="Archive" isPoint />
          <p className={styles.subtitle}>A list of things I’ve worked on</p>
        </div>
      </div>
    </div>
  );
}

export default ArchiveHeader;
