import React, { useEffect, useState, useRef } from 'react';
interface UseInViewOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}
export const useInView = (options: UseInViewOptions = {}) => {
  const {
    threshold = 0,
    triggerOnce = false,
    rootMargin = '0px'
  } = options;
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (triggerOnce && currentRef) {
          observer.unobserve(currentRef);
        }
      } else if (!triggerOnce) {
        setInView(false);
      }
    }, {
      threshold,
      rootMargin
    });
    observer.observe(currentRef);
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, triggerOnce, rootMargin]);
  return {
    ref,
    inView
  };
};