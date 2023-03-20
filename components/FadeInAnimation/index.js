import { motion as m } from "framer-motion";

const FadeInAnimation = ({ children }) => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      {children}
    </m.div>
  );
};

export default FadeInAnimation;
