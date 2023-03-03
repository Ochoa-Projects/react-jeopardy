import { AnimatePresence, motion as m } from "framer-motion";

const FlipAnimation = ({ children, isVisible, background }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <m.div
          key="question"
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: background,
            width: "100%",
            height: "100vh",
          }}
          initial={{ rotateY: 180, scale: 0.05 }}
          animate={{ rotateY: 0, scale: 1 }}
          transition={{ duration: 1 }}
          exit={{
            rotateY: 180,
            scale: 0,
            transition: { duration: 1, delay: 3 },
          }}
        >
          {children}
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default FlipAnimation;
