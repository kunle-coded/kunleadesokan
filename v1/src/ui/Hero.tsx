import TextButton from './buttons/TextButton';
import Display from './headings/Display';
import HeadingOne from './headings/HeadingOne';
import styles from './Hero.module.css';

function Hero() {
  return (
    <div className="containerGlobal">
      <div className={styles.containerHro}>
        <div className={styles.contentHro}>
          <div className={`${styles.gridColmn} ${styles.colmLft}`}>
            <div className={styles.hroTxt}>
              <p>{`<Hi, I'm,/>`}</p>
              <div className={styles.hroTxtDspl}>
                <Display>Kunle</Display>
                <span>.</span>
              </div>
              <div className={styles.hroTxtHdg}>
                <HeadingOne>Creating magic for the web.</HeadingOne>
              </div>
              <div className={styles.hroTxtCta}>
                <TextButton href="/work">View my work</TextButton>
              </div>
            </div>
          </div>
          <div className={`${styles.gridColmn} ${styles.colmRgt}`}>
            <h1>Hero Image</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
