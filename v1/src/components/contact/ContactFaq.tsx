import React, { useState } from "react";
import styles from "./ContactFaq.module.css";
import { faqs } from "../../lib/store/data";

function ContactFaq() {
  const [current, setCurrent] = useState(-1);

  function handleFaq(event: React.MouseEvent<HTMLUListElement>) {
    const target = event.target as HTMLElement;
    const index = target.tabIndex;
    if (current !== index) {
      setCurrent(index);
    } else {
      setCurrent(-1);
    }
  }

  return (
    <section className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.colLeft}>
          <h2>A few things you may want to ask me</h2>
        </div>
        <div className={styles.colRight}>
          <ul className={styles.faqs} onClick={handleFaq}>
            {faqs.map((faq) => (
              <li
                key={faq.id}
                className={styles.faqItem}
                tabIndex={faq.id}
                aria-current={current === faq.id}
              >
                <div className={styles.faqHeader}>
                  <p>{faq.question}</p>
                  <span>
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <path
                        d="M6.66675 11.3334L10.0001 8.00002L6.66675 4.66669"
                        stroke="#e6e6e6"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <div className={styles.faqBody}>
                  <div
                    className={`${styles.faqBodyInner} ${
                      current === faq.id ? styles.showFaqBody : ""
                    }`}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ContactFaq;
