import { motion as m } from "framer-motion";
import styles from "./styles.module.css";

const DropAnimation = ({ children }) => {
  return (
    <m.div
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ ease: "backOut", duration: 0.4 }}
      className={styles.drop}
    >
      {children}
    </m.div>
  );
};

export default DropAnimation;
