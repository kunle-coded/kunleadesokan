import { useRef } from "react";
import useReveal from "../../lib/hooks/useReveal";

interface SectionTitleProps {
  title: string;
  isPoint: boolean;
}

function SectionTitle({ title, isPoint }: SectionTitleProps) {
  const titleRef = useRef(null);

  const { isIntersecting } = useReveal(titleRef);

  return (
    <div ref={titleRef} className="section">
      <h1 className={`text ${isIntersecting ? "textReveal" : ""}`}>
        {title}
        {isPoint && <span>.</span>}
      </h1>
    </div>
  );
}

export default SectionTitle;
