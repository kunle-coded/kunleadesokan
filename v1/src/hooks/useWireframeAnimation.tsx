import { useEffect, useRef, useState } from 'react';

function useWireframeAnimation(wireframeHeight: number) {
  const [moveValue, setMoveValue] = useState<number>(0);
  const [transformNum, setTransformNum] = useState<number>(0);
  //   const [isHover, setIsHover] = useState<boolean>(false);

  const prevScrollPercentage = useRef<number | null>(null);

  const getMouseMovement = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX } = event;
    // const width = window.innerWidth;

    const newScrollPercentage = (clientX / wireframeHeight) * 100;
    let delta = newScrollPercentage - (prevScrollPercentage.current || 0);

    // Add/subtract the delta, with constraints
    setMoveValue((prev) => Math.min(Math.max(prev + delta, 0), 100));
    prevScrollPercentage.current = newScrollPercentage;
  };

  useEffect(() => {
    // Clamp the transformNum value to stay within 0% and 100%
    setTransformNum(Math.min(Math.max(moveValue / 2, 0), 100));
  }, [moveValue]);

  return { transformNum, getMouseMovement };
}

export default useWireframeAnimation;
