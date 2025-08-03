import styles from "./ButtonCustom.module.css";

interface ButtonProps {
  label: string;
  big?: boolean;
}

function ButtonCustom({ label, big }: ButtonProps) {
  return (
    <button
      className={`${styles.buttonContainer}  ${
        big ? styles.bigButtonContainer : ""
      }`}
    >
      <div className={`${styles.btnContent}  ${big ? styles.bigButton : ""}`}>
        {label}
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
    </button>
  );
}

export default ButtonCustom;
