// packages
import { useEffect, useState } from 'react';

// interfaces
type useScrollSpyParams = {
  offset?: number;
  threshold?: number;
}

// ReactHook
export default function useBookScrollSpy({
  offset = 115,
  threshold = 400
}: useScrollSpyParams) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollY = window.scrollY + offset;
      setScrolled(scrollY > threshold);
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return { scrolled };
}