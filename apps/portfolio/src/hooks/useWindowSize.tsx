/**
 * NOTE:
 * This code was borrowed from `react-use`:
 * https://github.com/streamich/react-use/blob/master/src/useWindowSize.ts
 */

import { useEffect, useState } from "react";

const isClient = typeof window === "object";

type WindowDimensions = {
  width: number;
  height: number;
};

export const useWindowSize = (
  initialWidth = Infinity,
  initialHeight = Infinity
) => {
  const [state, setState] = useState<WindowDimensions>({
    width: isClient ? window.innerWidth : initialWidth,
    height: isClient ? window.innerHeight : initialHeight
  });

  useEffect(() => {
    if (isClient) {
      const handler = () => {
        setState({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };
      window.addEventListener("resize", handler);
      return () => window.removeEventListener("resize", handler);
    }
  }, []);

  return state;
};
