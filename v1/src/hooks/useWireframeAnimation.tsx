import { useEffect, useRef, useState } from 'react';

function useWireframeAnimation(wireframeHeight: number[]) {
  const [moveValue, setMoveValue] = useState<number>(0);
  const [transformNum, setTransformNum] = useState<number>(0);
  const [moveValueTwo, setMoveValueTwo] = useState<number>(0);
  const [transformNumTwo, setTransformNumTwo] = useState<number>(0);

  const prevScrollPercentage = useRef<number | null>(null);
  const prevScrollPercentageTwo = useRef<number | null>(null);

  const getMouseMovement = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX } = event;
    // const width = window.innerWidth;

    const newScrollPercentage = (clientX / wireframeHeight[0]) * 100;
    const newScrollPercentageTwo = (clientX / wireframeHeight[1]) * 100;
    let delta = newScrollPercentage - (prevScrollPercentage.current || 0);
    let deltaTwo =
      newScrollPercentageTwo - (prevScrollPercentageTwo.current || 0);

    // Add/subtract the delta, with constraints
    setMoveValue((prev) => Math.min(Math.max(prev + delta, 0), 100));
    setMoveValueTwo((prev) => Math.min(Math.max(prev + deltaTwo, 0), 100));
    prevScrollPercentage.current = newScrollPercentage;
    prevScrollPercentageTwo.current = newScrollPercentageTwo;
  };

  useEffect(() => {
    // Clamp the transformNum value to stay within 0% and 100%
    setTransformNum(Math.min(Math.max(moveValue / 1.9, 0), 100));
    setTransformNumTwo(Math.min(Math.max(moveValueTwo / 1.2, 0), 100));
  }, [moveValue, moveValueTwo]);

  return { transformNum, transformNumTwo, getMouseMovement };
}

export default useWireframeAnimation;
