import { useRef } from "react";
import ContactSection from "../components/contact/ContactSection";
// import PageHero from "../components/hero/PageHero";
import ContactFaq from "../components/contact/ContactFaq";

function Contact() {
  const contactSecRef = useRef(null);
  return (
    <div>
      {/* <PageHero title="Contact Me" subtitleOne="Send me a message!" /> */}
      <div style={{ marginTop: "8.5rem" }}></div>
      <ContactSection contactSectionRef={contactSecRef} />
      <ContactFaq />
    </div>
  );
}

export default Contact;
