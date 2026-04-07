import { useEffect, useRef, useState, useMemo } from 'react';

/**
 * Revela contenido al entrar en viewport (una sola vez). Respeta prefers-reduced-motion vía CSS.
 */
export function useSectionReveal<T extends HTMLElement = HTMLElement>(
  options?: IntersectionObserverInit
) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);
  const observerOptions = useMemo(
    () => ({ threshold: 0.06, rootMargin: '0px 0px -6% 0px', ...options }),
    [options]
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    if (reduced) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      observerOptions
    );

    io.observe(el);
    return () => io.disconnect();
  }, [observerOptions]);

  return { ref, visible };
}
