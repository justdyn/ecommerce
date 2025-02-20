import React from 'react';
import { motion } from 'framer-motion';

const calculateRandomBlockDelay = (rowIndex, totalRows) => {
  const blockDelay = Math.random() * 0.5;
  const rowDelay = (totalRows - rowIndex - 1) * 0.05;
  return blockDelay + rowDelay;
};

const Transition = (WrappedComponent) => {
  return () => (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <WrappedComponent />
      </motion.div>

      {/* Exit Transition */}
      <motion.div
        className="block-container"
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {Array.from({ length: 10 }).map((_, rowIndex) => (
          <div className="row" key={rowIndex}>
            {Array.from({ length: 11 }).map((_, blockIndex) => (
              <motion.div
                key={blockIndex}
                className="block exit-block"
                variants={{
                  initial: { scaleY: 0 },
                  animate: { scaleY: 0 },
                  exit: { scaleY: 1 }
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: calculateRandomBlockDelay(rowIndex, 10),
                }}
              />
            ))}
          </div>
        ))}
      </motion.div>

      {/* Enter Transition */}
      <motion.div
        className="block-container"
        initial="exit"
        animate="initial"
      >
        {Array.from({ length: 10 }).map((_, rowIndex) => (
          <div className="row" key={`enter-${rowIndex}`}>
            {Array.from({ length: 11 }).map((_, blockIndex) => (
              <motion.div
                key={blockIndex}
                className="block enter-block"
                variants={{
                  initial: { scaleY: 0 },
                  exit: { scaleY: 1 }
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: calculateRandomBlockDelay(rowIndex, 10),
                }}
              />
            ))}
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default Transition;