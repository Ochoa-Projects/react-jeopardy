import { motion as m } from "framer-motion";
import styles from "./styles.module.css";

const PushAnimation = ({ children, isGameboard }) => {
  return (
    <m.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ delay: 0.4, ease: "backOut", duration: 0.6 }}
      className={styles.push}
      style={!isGameboard && { height: "auto" }}
    >
      {children}
    </m.div>
  );
};

export default PushAnimation;
