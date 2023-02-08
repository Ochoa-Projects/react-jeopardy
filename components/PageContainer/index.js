import styles from "./styles.module.css";
import { motion as m } from "framer-motion";

const PageContainer = ({ children, color = "--dark-blue" }) => {
  return (
    <m.div
      initial={{ scale: 0.1 }}
      animate={{ scale: 1 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      style={{ background: color }}
      className={styles.pageContainer}
    >
      {children}
    </m.div>
  );
};

export default PageContainer;
