import { useRef } from "react";
import { timeline } from "../../lib/types/types";
import styles from "./AboutTimelines.module.css";
import TimelineItem from "./TimelineItem";
import useReveal from "../../lib/hooks/useReveal";

const timelines: timeline[] = [
  {
    id: 0,
    experience: "Worked as a solo-entrepreneur working on social media",
    level: 0,
    year: "2014",
  },
  {
    id: 1,
    experience: "Transitioned to marketing research and corporate designs",
    level: 90,
    year: "2016",
  },
  {
    id: 2,
    experience:
      "Then moved to business development and marketing-focused solutions",
    level: 180,
    year: "2020",
  },
  {
    id: 3,
    experience:
      "Currently the only designer in Kuwait that uses marketing and business skills.",
    level: 270,
    year: "Now",
  },
];

function AboutTimelines() {
  const timelineRef = useRef(null);

  const { isIntersecting } = useReveal(timelineRef);

  return (
    <section className={styles.container}>
      <ol ref={timelineRef} className={styles.orderedList}>
        {timelines.map((timeline) => (
          <TimelineItem
            key={timeline.id}
            timeline={timeline}
            isIntersecting={isIntersecting}
          />
        ))}
      </ol>
    </section>
  );
}

export default AboutTimelines;
