import { useState, useEffect } from "react";

export interface State {
  width: number | undefined;
  height: number | undefined;
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<State>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};
