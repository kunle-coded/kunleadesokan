import React, { createContext, useContext, useState } from "react";

interface SliderContextValue {
  currentSlide: number;
  slidePosition: number;
  isTransitioning: boolean;
  handleSlide: (direction: string) => void;
  handleDots: (event: React.MouseEvent<HTMLOListElement>) => void;
}

const SliderContext = createContext<SliderContextValue>({
  currentSlide: 0,
  slidePosition: 0,
  isTransitioning: false,
  handleSlide: () => {},
  handleDots: () => {},
});

interface SliderProviderProps {
  children: React.ReactNode;
}

function SliderProvider({ children }: SliderProviderProps) {
  const STEP = 10005;
  const MAX = 40020;
  const [currentSlide, setCurrentSlide] = useState(1);
  const [slidePosition, setSlidePosition] = useState(STEP);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const handleSlide = (direction: string) => {
    if (direction === "next") {
      setCurrentSlide((prev) => prev + 1);
      setSlidePosition((prev) => prev + STEP);

      if (currentSlide === 4) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentSlide(1);
          setSlidePosition(STEP);
        }, 600);

        setTimeout(() => setIsTransitioning(true), 700);
      }
    } else {
      setCurrentSlide((prev) => prev - 1);
      setSlidePosition((prev) => prev - STEP);

      if (currentSlide === 1) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentSlide(4);
          setSlidePosition(MAX);
        }, 500);

        setTimeout(() => setIsTransitioning(true), 700);
      }
    }
  };

  const handleDots = (event: React.MouseEvent<HTMLOListElement>) => {
    const target = event.target as HTMLElement;

    if (target.tagName !== "LI") return;

    const targetIndex = target.tabIndex;

    if (targetIndex === currentSlide) return;

    setCurrentSlide(targetIndex);
    setSlidePosition(STEP * targetIndex);
  };

  return (
    <SliderContext.Provider
      value={{
        currentSlide,
        slidePosition,
        isTransitioning,
        handleSlide,
        handleDots,
      }}
    >
      {children}
    </SliderContext.Provider>
  );
}

export default SliderProvider;

export const useSlider = () => {
  const context = useContext(SliderContext);

  if (!context) {
    throw new Error("useSlider must be used within a SliderProvider");
  }

  return context;
};
