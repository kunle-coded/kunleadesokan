import { RefObject, useEffect } from "react";
import { Indicator } from "../types/types";

function useIntersection(
  sectionRefs: RefObject<HTMLDivElement | null>[],
  callback: (index: number) => void,
  indicatorCallback: (object: Indicator) => void
) {
  useEffect(() => {
    const intersectSections = (entries: IntersectionObserverEntry[]) => {
      let maxRatio = 0;
      let visibleIndex = -1;

      const indicatorObj: Indicator = {
        first: false,
        second: false,
        third: false,
        fourth: false,
        fifth: false,
      };

      entries.forEach((entry) => {
        const index = sectionRefs.findIndex(
          (ref) => ref.current === entry.target
        );

        const target = entry.target as HTMLDivElement;

        if (target.dataset.section === "eins") {
          const { top } = entry.boundingClientRect;
          const viewportHeight = window.innerHeight;

          const scrolledPercentage = Math.min(
            Math.max((0 - top) / viewportHeight, 0),
            1
          );

          if (scrolledPercentage >= 0.36) indicatorObj.fifth = true;
          if (scrolledPercentage >= 0.4) indicatorObj.fourth = true;
          if (scrolledPercentage >= 0.44) indicatorObj.third = true;
          if (scrolledPercentage >= 0.48) indicatorObj.second = true;
          if (scrolledPercentage >= 0.51) indicatorObj.first = true;
        }

        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          visibleIndex = index;
        }
      });

      indicatorCallback(indicatorObj);

      if (visibleIndex !== -1) {
        callback(visibleIndex);
      }
    };

    const observer = new IntersectionObserver(intersectSections, {
      root: null,
      threshold: Array.from({ length: 101 }, (_, i) => i / 100),
    });

    sectionRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [callback, indicatorCallback, sectionRefs]);
}

export default useIntersection;
