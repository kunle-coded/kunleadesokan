import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.headerMain}>
      <div className={styles.headerInner}>
        <nav className={styles.headerNav}>
          <ul aria-label="Navigation menu">
            <li>
              <a href="/work" className="nav-link">
                Work
              </a>
            </li>
            <li>
              <a href="/about" className="nav-link">
                About me
              </a>
            </li>
            <li>
              <a href="/notes" className="nav-link">
                Notes
              </a>
            </li>
            <li>
              <a href="/contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <a href="" className={styles.headerBtnNew}>
          <div className={styles.btnContent}>
            My Resume
            <svg
              width="72"
              height="22"
              viewBox="0 0 72 22"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.bowArrow}
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeMiterlimit="0"
                d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"
              ></path>
            </svg>
          </div>
        </a>
        {/*
        <a href="/resume" className={styles.headerBtn}>
          Resume{" "}
           <span className={styles.headerBtnIcon}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.00008 8.66665H10.0001M6.00008 11.3333H8.00008M2.66675 2.66665V13.3333C2.66675 13.6869 2.80722 14.0261 3.05727 14.2761C3.30732 14.5262 3.64646 14.6666 4.00008 14.6666H12.0001C12.3537 14.6666 12.6928 14.5262 12.9429 14.2761C13.1929 14.0261 13.3334 13.6869 13.3334 13.3333V5.56131C13.3334 5.38369 13.2979 5.20785 13.229 5.04414C13.16 4.88043 13.0591 4.73214 12.9321 4.60798L9.97208 1.71331C9.72299 1.46975 9.38846 1.33336 9.04008 1.33331H4.00008C3.64646 1.33331 3.30732 1.47379 3.05727 1.72384C2.80722 1.97389 2.66675 2.31302 2.66675 2.66665Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.3335 1.33331V3.99998C9.3335 4.3536 9.47397 4.69274 9.72402 4.94279C9.97407 5.19284 10.3132 5.33331 10.6668 5.33331H13.3335"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
            </svg>
          </span> */}
        {/* 
          <span className={styles.headerBtnIcon}>
          <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.99995 8.80001C3.78778 8.80001 3.5843 8.71573 3.43427 8.5657C3.28424 8.41567 3.19995 8.21219 3.19995 8.00001C3.19995 7.78784 3.28424 7.58436 3.43427 7.43433C3.5843 7.2843 3.78778 7.20001 3.99995 7.20001H12C12.2121 7.20001 12.4156 7.2843 12.5656 7.43433C12.7157 7.58436 12.8 7.78784 12.8 8.00001C12.8 8.21219 12.7157 8.41567 12.5656 8.5657C12.4156 8.71573 12.2121 8.80001 12 8.80001H3.99995Z"
                fill="currentColor"
              />
              <path
                d="M7.19995 4.00001C7.19995 3.78784 7.28424 3.58436 7.43427 3.43433C7.5843 3.2843 7.78778 3.20001 7.99995 3.20001C8.21212 3.20001 8.41561 3.2843 8.56564 3.43433C8.71567 3.58436 8.79995 3.78784 8.79995 4.00001V12C8.79995 12.2122 8.71567 12.4157 8.56564 12.5657C8.41561 12.7157 8.21212 12.8 7.99995 12.8C7.78778 12.8 7.5843 12.7157 7.43427 12.5657C7.28424 12.4157 7.19995 12.2122 7.19995 12V4.00001Z"
                fill="currentColor"
              />
            </svg> 
          </span>
        </a>
            */}
      </div>
    </header>
  );
}

export default Header;
