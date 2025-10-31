import { useEffect, useRef, useState } from "react";

/**
 * Detecta cuándo un elemento entra o sale del viewport.
 * Retorna: [ref, isVisible]
 */
export const useInView = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2, // 20% visible activa
        ...options,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return [ref, isVisible];
};
