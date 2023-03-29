import { motion as m } from "framer-motion";
import useWindowSize from "../../hooks/useWindowSize";
import styles from "./styles.module.css";

const PushAnimation = ({ children, isGameboard, width }) => {
  return (
    <>
      {width > 414 ? (
        <m.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.4, ease: "backOut", duration: 0.6 }}
          className={styles.push}
          style={!isGameboard && { height: "auto" }}
        >
          {children}
        </m.div>
      ) : (
        <m.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.4, duration: 0.2 }}
          className={styles.push}
          style={!isGameboard && { height: "auto" }}
        >
          {children}
        </m.div>
      )}
    </>
  );
};

export default PushAnimation;
