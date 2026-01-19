const getCSSVar = (name: string, fallback: number): number => {
  if (typeof window === 'undefined') return fallback;
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
  return value ? Number(value) : fallback;
};

export const navHeightHeader = getCSSVar("--nav-height-header", 147);

export const navRadius = getCSSVar("--nav-radius", 25);