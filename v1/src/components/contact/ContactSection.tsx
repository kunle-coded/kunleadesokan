import { RefObject, useRef } from "react";
import Button from "../../ui/buttons/Button";
import styles from "./ContactSection.module.css";
import useReveal from "../../lib/hooks/useReveal";
import useInputFocus from "../../lib/hooks/useInputFocus";

interface ContactProps {
  contactSectionRef: RefObject<HTMLDivElement | null>;
}

function ContactSection({ contactSectionRef }: ContactProps) {
  const contactTopRef = useRef(null);
  const contactBottomRef = useRef(null);
  useReveal(contactTopRef);
  useReveal(contactBottomRef);

  const nameFocus = useInputFocus();
  const { isFocus: isNameFocus, ...nameFocusProps } = nameFocus;
  const emailFocus = useInputFocus();
  const { isFocus: isEmailFocus, ...emailFocusProps } = emailFocus;
  const messageFocus = useInputFocus();
  const { isFocus: isMessageFocus, ...messageFocusProps } = messageFocus;

  return (
    <section
      ref={contactSectionRef}
      data-section="fuenf"
      className={`contactSection ${styles.contactSection}`}
    >
      <div className={styles.contactInnerContainer}>
        <div ref={contactTopRef} className={`section ${styles.contactTop}`}>
          <div className={styles.contactHeading}>
            <h1>
              Let's <br />
              build{" "}
              <span>
                something <br />
                amazing
              </span>{" "}
              <br /> together
            </h1>
          </div>
          <div className={styles.contactBody}>
            <p>
              Have an exciting project you need help with? Got a question or
              proposal, or just want to say hello? I am open for freelance
              projects, colaborations and networking.
            </p>
          </div>
        </div>
        <div className={styles.contactBottom}>
          <form
            ref={contactBottomRef}
            id="home-contact"
            action=""
            className="section contact-form"
          >
            <div className={styles.formHeader}>
              <p>
                How can I help? <br />
                Let's talk
              </p>
              <span>
                <svg
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 19.209L21 13.209M13 19.209L5 13.209M13 19.209V5.20898"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <div className={styles.formRow}>
              <div
                className={`input-wrapper ${styles.inputGroup} ${
                  isNameFocus ? styles.focused : ""
                }`}
              >
                <label htmlFor="full-name">Your name</label>
                <input
                  id="full-name"
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  required
                  {...nameFocusProps}
                />
              </div>
              <div
                className={`input-wrapper ${styles.inputGroup} ${
                  isEmailFocus ? styles.focused : ""
                }`}
              >
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  name="_replyto"
                  required
                  {...emailFocusProps}
                />
              </div>
            </div>
            <div className={styles.formRow}>
              <div
                className={`input-wrapper ${styles.inputGroup} ${
                  isMessageFocus ? styles.focused : ""
                }`}
              >
                <label htmlFor="message">Your message</label>

                <textarea
                  name="message"
                  id="message"
                  placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"
                  {...messageFocusProps}
                ></textarea>
              </div>
            </div>
            <div className={styles.sendButton}>
              <Button label="Send" type="secondary" big />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
