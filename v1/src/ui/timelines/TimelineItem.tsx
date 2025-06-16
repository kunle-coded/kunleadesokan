import { useEffect, useState } from "react";
import styles from "./TimelineItem.module.css";
import { timeline } from "../../lib/types/types";

interface TimelineItemProps {
  timeline: timeline;
  isIntersecting: boolean;
}

function TimelineItem({ timeline, isIntersecting }: TimelineItemProps) {
  const [angle, setAngle] = useState(0);
  const radius = 50;
  const center = 60;

  useEffect(() => {
    if (isIntersecting) {
      let start: number | null = null;
      let animationFrameId: number;

      const animate = (timestamp: number) => {
        if (start === null) start = timestamp;
        const progress = timestamp - start;
        const duration = 12000; // 6 seconds
        const eased = Math.min(progress / duration, 1);

        const newAngle = eased * timeline.level;
        setAngle(newAngle);

        if (eased < 1) {
          animationFrameId = requestAnimationFrame(animate);
        }
      };

      animationFrameId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrameId);
    }
  }, [isIntersecting, timeline.level]);

  const adjustedAngle = angle - 90;
  const x = center + radius * Math.cos((adjustedAngle * Math.PI) / 180);
  const y = center + radius * Math.sin((adjustedAngle * Math.PI) / 180);

  return (
    <li className={styles.listItemContainer}>
      <div className={styles.listItemWrapper}>
        <div className={styles.shapeContainer}>
          <div className={styles.timelineShape}>
            <p>{timeline.year}</p>
          </div>
          <span
            className={styles.timelinePoint}
            style={{ left: `${x}px`, top: `${y}px` }}
          ></span>
        </div>
        <div className={styles.timelineText}>
          <p>{timeline.experience}</p>
        </div>
      </div>
    </li>
  );
}

export default TimelineItem;
