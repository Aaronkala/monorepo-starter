import { useEffect, useState, RefObject } from "react";

interface IntersectionState {
  inView: boolean;
  triggered: boolean;
  entry: IntersectionObserver | undefined;
}

interface IntersectionProps {
  ref: RefObject<HTMLElement>;
  options: {
    threshold?: number | Array<number>;
    rootMargin?: string;
    root?: Element | null;
  };
}

export const useIntersection = (
  ref: IntersectionProps["ref"],
  {
    threshold = [0, 0.25, 0.5, 0.75, 1],
    root,
    rootMargin
  }: IntersectionProps["options"]
) => {
  // configure the state
  const [state, setState] = useState<IntersectionState>({
    inView: false,
    triggered: false,
    entry: undefined
  });

  let observer: IntersectionObserver | null = null;

  if (typeof IntersectionObserver !== "undefined") {
    observer = new IntersectionObserver(
      (entries, observerInstance) => {
        // checks to see if the element is intersecting
        if (entries[0].isIntersecting && state.inView === false) {
          setState({
            inView: true,
            triggered: true,
            entry: observerInstance
          });

          observerInstance.unobserve(ref.current as Element);
        } else if (!entries[0].isIntersecting && state.inView === true) {
          setState({
            inView: false,
            triggered: true,
            entry: observerInstance
          });

          observerInstance.unobserve(ref.current as Element);
        }
        return;
      },
      {
        threshold: threshold || 0,
        root: root || null,
        rootMargin: rootMargin || "0%"
      }
    );
  }

  useEffect(() => {
    if (observer && ref.current) {
      observer.observe(ref.current);
    }
  });

  return [state.inView, state.entry];
};
