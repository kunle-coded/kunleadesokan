import styles from "./Button.module.css";

interface ButtonProps {
  label: string;
  type?: "primary" | "secondary";
  big?: boolean;
}

function Button({ label, type, big }: ButtonProps) {
  return (
    <button
      className={`${styles.buttonContainer} ${
        type === "secondary" ? styles.buttonContainerSecondary : ""
      } ${big ? styles.bigButtonContainer : ""}`}
    >
      <div
        className={`${styles.btnContent} ${
          type === "secondary" ? styles.btnContentSecondary : ""
        } ${big ? styles.bigButton : ""}`}
      >
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

export default Button;
