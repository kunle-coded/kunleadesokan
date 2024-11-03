import TextButton from '../../ui/buttons/TextButton';
import styles from './Intro.module.css';

function Intro() {
  return (
    <div className={styles.secIntrCntnr}>
      <div className={styles.intrInnrCntnr}>
        <div className={styles.intrCntWrppr}>
          <div className={styles.intrCntCntnr}>
            <h4 className="headingFour">
              I’m passionate about crafting digital experiences that{' '}
              <span className={styles.intrTxtHghlgt}>stand out</span>, are
              engaging, accessible, and user-centric.
            </h4>
            <span className={styles.intrLnkCntnr}>
              <TextButton href="/about" type="custom">
                About me
              </TextButton>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
