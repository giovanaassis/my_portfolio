export const fadeFromLeft = {
  initial: { x: -50, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  transition: { duration: 0.6 },
  viewport: { amount: 0.5, once: true },
};

export const diagonalDown = {
  initial: { x: 0, y: 0 },
  whileInView: { x: -15, y: 10 },
  transition: { duration: 0.5, delay: 0.6 },
  viewport: { once: true },
};

export const diagonalTop = {
  initial: { x: 0, y: 0 },
  whileInView: { x: 10, y: -10 },
  transition: { duration: 0.5, delay: 0.6 },
  viewport: { once: true, amount: 0.5 },
};

export const fadeFromRight = {
  initial: { x: 50, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  transition: { duration: 0.8 },
  viewport: { once: true },
};

export const fadeUp = {
  initial: { y: -50, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.8 },
  viewport: { amount: 0.5, once: true },
};
