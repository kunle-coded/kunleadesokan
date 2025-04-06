import { useRef } from "react";
import useReveal from "../../hooks/useReveal";
import styles from "./SectionSubtitle.module.css";

interface SectionSubtitleProps {
  title: string;
  subtitle?: string;
  link?: string;
}

function SectionSubtitle({ title, subtitle, link }: SectionSubtitleProps) {
  const subtitleRef = useRef(null);

  useReveal(subtitleRef);
  return (
    <div ref={subtitleRef} className={`section ${styles.subtitleSection}`}>
      <h3>{title}</h3>

      {subtitle && (
        <a href={link} className="nav-link">
          {subtitle}
        </a>
      )}
    </div>
  );
}

export default SectionSubtitle;
