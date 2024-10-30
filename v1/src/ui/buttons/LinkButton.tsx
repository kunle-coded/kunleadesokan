import { useEffect, useState } from 'react';
import styles from './LinkButton.module.css';

interface LinkButtonProps {
  href: string;
  label: string;
  type: 'primary' | 'secondary' | 'custom';
  isScroll?: boolean;
}

function LinkButton({ href, label, type, isScroll }: LinkButtonProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (isScroll) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, [isScroll]);

  return (
    <a
      data-k-28a95fvb
      href={`${href}`}
      className={`${styles.btnAll} ${isScroll ? styles.scrolledCntrl : styles.unScrolledCntrl} ${type === 'primary' ? styles.primaryBtn : type === 'custom' ? styles.customBtn : styles.secondaryBtn} ${isScroll ? styles.onScroll : ''}`}
    >
      <span data-k-28a95fvb="" className={styles.btnPoint}>
        <span
          data-k-28a95fvb=""
          className={`${styles.btnPointInner} ${styles.opacityTrans}`}
        >
          <svg
            data-k-28a95fvb=""
            width="23"
            height="19"
            viewBox="0 0 23 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              data-k-28a95fvb=""
              d="M1 9.5H22M22 9.5L14.32 1M22 9.5L14.32 18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </span>
      </span>
      <span className={styles.btnTxt}>{label}</span>
    </a>
  );
}

export default LinkButton;
