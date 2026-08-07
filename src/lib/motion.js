// Shared Framer Motion variants used across the portfolio sections.
// Keeping them centralized keeps the animation language consistent.

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer = (stagger = 0.12, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

// Default viewport settings for scroll-triggered reveals.
// `once: true` avoids re-triggering every time the user scrolls past a
// section, which keeps the page feeling calm rather than jumpy.
export const viewport = { once: true, amount: 0.2 };
