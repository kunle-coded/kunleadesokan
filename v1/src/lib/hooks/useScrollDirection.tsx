import { useEffect, useRef, useState } from "react";
import { throttle } from "../helpers/utils";

const THRESHOLD = 10;
const THROTTLE_MS = 100;

function useScrollDirection() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isScrollHome, setIsScrollHome] = useState(false);
  const [isScrollDown, setIsScrollDown] = useState(false);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 40) {
        setIsScrollHome(true);
      } else {
        setIsScrollHome(false);
      }

      if (currentScrollY > 150) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }

      if (currentScrollY > lastScrollY.current + THRESHOLD) {
        setIsScrollDown(true);
      } else if (currentScrollY < lastScrollY.current - THRESHOLD) {
        setIsScrollDown(false);
      }
      lastScrollY.current = currentScrollY;
    };

    const throttledScroll = throttle(handleScroll, THROTTLE_MS);

    document.addEventListener("scroll", throttledScroll);

    return () => {
      document.removeEventListener("scroll", throttledScroll);
    };
  }, []);

  return { isScrolling, isScrollDown, isScrollHome };
}

export default useScrollDirection;
