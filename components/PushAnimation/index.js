import { motion as m } from "framer-motion";

const PushAnimation = ({ children }) => {
  return (
    <m.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ delay: 0.4, ease: "backOut", duration: 0.6 }}
    >
      {children}
    </m.div>
  );
};

export default PushAnimation;
