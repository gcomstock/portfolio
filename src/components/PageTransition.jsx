import { motion } from 'framer-motion';

const variants = {
  initial: { opacity: 0, y: 12 },
  enter:   { opacity: 1, y: 0,  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } },
};

// Scroll fires when the enter animation starts — exit has fully completed at this point
// (AnimatePresence mode="wait"), and the incoming page is still at opacity 0, so the
// position reset is invisible to the user.
function handleAnimationStart(def) {
  if (def === 'enter') window.scrollTo({ top: 0, behavior: 'instant' });
}

export function PageTransition({ children }) {
  return (
    <motion.main
      initial="initial"
      animate="enter"
      exit="exit"
      variants={variants}
      onAnimationStart={handleAnimationStart}
    >
      {children}
    </motion.main>
  );
}
