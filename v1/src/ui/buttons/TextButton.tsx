import styles from './TextButton.module.css';

interface TextButtonProps {
  children: string;
  href: string;
  type?: string;
}

function TextButton({ children, href, type }: TextButtonProps) {
  return (
    <a className={styles.btnCntnr} href={href}>
      <span className={styles.btnTxt}>{children}</span>
      <span className={styles.btnArrw}>
        <svg
          className={styles.btnArwSvg}
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: 'absolute',
            inset: '0px',
            width: '100%',
            height: '100%',
          }}
        >
          <path
            d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}

export default TextButton;
