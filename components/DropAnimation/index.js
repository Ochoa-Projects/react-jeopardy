import { motion as m } from "framer-motion";

const DropAnimation = ({ children }) => {
  return (
    <m.div
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ ease: "backOut", duration: 0.4 }}
    >
      {children}
    </m.div>
  );
};

export default DropAnimation;
