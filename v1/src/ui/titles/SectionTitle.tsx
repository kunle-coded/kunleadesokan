import { useRef } from "react";
import useReveal from "../../lib/hooks/useReveal";

interface SectionTitleProps {
  title: string;
  isPoint: boolean;
}

function SectionTitle({ title, isPoint }: SectionTitleProps) {
  const titleRef = useRef(null);

  useReveal(titleRef);

  return (
    <div ref={titleRef} className="section">
      <h1>
        {title}
        {isPoint && <span>.</span>}
      </h1>
    </div>
  );
}

export default SectionTitle;
