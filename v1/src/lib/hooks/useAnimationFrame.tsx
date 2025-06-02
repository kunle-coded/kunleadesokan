import { useRef, useState } from "react";

function useAnimationFrame() {
  const STEP = 10005;
  const MAX = 40020;
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [renderTick, setRenderTick] = useState(0);

  const currentSlide = useRef(1);
  const slidePosition = useRef(STEP);
  const fromRef = useRef<number>(0);
  const toRef = useRef<number>(0);
  const toSlideRef = useRef(currentSlide.current);

  const startTime = useRef<number | null>(null);
  const duration = 500;

  const handleSlide = (direction: string) => {
    fromRef.current = slidePosition.current;
    toRef.current =
      direction === "next"
        ? slidePosition.current + STEP
        : slidePosition.current - STEP;

    toSlideRef.current =
      direction === "next"
        ? currentSlide.current + 1
        : currentSlide.current - 1;

    startTime.current = null;

    const animate = (timestamp: number) => {
      if (startTime.current === null) {
        startTime.current = timestamp;
      }

      const elapsed = timestamp - startTime.current;
      console.log("elapsed = ", elapsed);
      const progress = Math.min(elapsed / duration, 1);
      console.log("progress = ", progress);

      const from = fromRef.current;
      const to = toRef.current;
      const newPosition = from + (to - from) * progress;
      slidePosition.current = newPosition;
      setRenderTick((tick) => tick + 1);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        currentSlide.current = toSlideRef.current;

        if (direction === "next" && currentSlide.current === 4) {
          setIsTransitioning(false);
          currentSlide.current = 1;
          slidePosition.current = STEP;
          setRenderTick((tick) => tick + 1);
        }

        if (direction === "previous" && currentSlide.current === 1) {
          setIsTransitioning(false);
          currentSlide.current = 4;
          slidePosition.current = MAX;
          setRenderTick((tick) => tick + 1);
        }

        setIsTransitioning(true);
      }
    };

    requestAnimationFrame(animate);
  };

  return { handleSlide, slidePosition, isTransitioning, renderTick };
}

export default useAnimationFrame;
