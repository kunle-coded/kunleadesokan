import { useRef } from "react";
import SectionTitle from "../../ui/titles/SectionTitle";
import styles from "./PageHero.module.css";
import useReveal from "../../lib/hooks/useReveal";

interface PageHeroProps {
  title: string;
  subtitleOne?: string;
  subtitleTwo?: string;
}

function PageHero({ title, subtitleOne, subtitleTwo }: PageHeroProps) {
  const heroRef = useRef(null);
  const { isIntersecting } = useReveal(heroRef);

  return (
    <div className={styles.heroContainer}>
      <div ref={heroRef} className={styles.heroWrapper}>
        <SectionTitle title={title} isPoint />
        {subtitleOne && (
          <div className={styles.subtitle}>
            <p className={`text ${isIntersecting ? "textReveal" : ""}`}>
              {subtitleOne}
            </p>
            <p className={`text ${isIntersecting ? "textReveal" : ""}`}>
              {subtitleTwo}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PageHero;
