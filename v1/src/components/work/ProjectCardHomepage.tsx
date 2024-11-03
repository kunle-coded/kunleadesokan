import styles from './ProjectCardHomepage.module.css';

function ProjectCardHomepage() {
  return (
    <div className={styles.prjctCntnr}>
      <div className={styles.prjctWrppr}>
        <div className={styles.prjctHdngWrpp}>
          <div className={styles.prjctTyp}>
            <h5 className="headingFive">Web Development</h5>
          </div>

          <div className={styles.prjctPnt}></div>
          <div className={styles.prjctLn}></div>
          <div className={styles.prjctLbl}>
            <h5 className="headingFive">Project</h5>
          </div>
        </div>
        <div className={styles.prjctDtilCntnr}>
          <div className={styles.prjctDtilGrdClm1}>
            <div className={styles.clmWrppr}>
              <div className={styles.prjctDtilTtl}>Overview</div>
              <div className={styles.prjctDscptn}>
                Lorem ipsum dolor sit amet consectetur. Morbi volutpat dolor
                fermentum a ultricies eu purus elementum. Urna elementum quam
                suspendisse non nulla est eget dolor. Non non in tristique lorem
                tempus praesent quis diam. Habitant iaculis mattis eu in.
              </div>
            </div>
          </div>
          <div className={styles.prjctDtilGrdClm2}>
            <div className={styles.clmWrppr}>
              <div className={styles.prjctDtilTtl}>Tools</div>
              <div className={styles.prjctTlsTxt}>React, Nodejs, Figma</div>
            </div>
            <div className={styles.clmWrpprInnr}>
              <div className={styles.prjctDtilTtl}>Info</div>
              <div className={styles.prjctDtlStts}>
                <div className={styles.prjctStts}></div>
                <div>Published</div>
              </div>
              <div className={styles.prjctTlsTxt}>Last updated: Oct 2024</div>
            </div>
          </div>
          <div className={styles.prjctDtilGrdClm3}>
            <div className={styles.clmWrppr}>
              <div className={styles.clmWrppr}>Koos Languages</div>
              <div className={styles.prjctWrpp}>View project</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.prjctWrpp}></div>
    </div>
  );
}

export default ProjectCardHomepage;
