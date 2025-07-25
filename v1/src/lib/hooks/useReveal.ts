import { useState, useEffect, RefObject } from "react";

function useReveal(ref: RefObject<HTMLDivElement | null>) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const revealSection = function (entries: IntersectionObserverEntry[]) {
      const [entry] = entries;
      setIsIntersecting(entry.isIntersecting);

      if (!entry.isIntersecting) return;

      entry.target.classList.remove("section-hidden");
      observer.unobserve(entry.target);
    };

    const options = {
      root: null,
      threshold: 0.15,
    };

    const observer = new IntersectionObserver(revealSection, options);

    if (ref.current) {
      observer.observe(ref.current);
      ref.current.classList.add("section-hidden");
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return { ref, isIntersecting };
}

export default useReveal;
