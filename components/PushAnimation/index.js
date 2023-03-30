import { motion as m } from "framer-motion";
import { useState, useEffect } from "react";
import Loading from "../Loading";
import styles from "./styles.module.css";

const PushAnimation = ({ children, isGameboard, width }) => {
  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    setWindowWidth(width);
  }, [windowWidth]);

  if (!width) {
    console.log("inside");
    return <Loading />;
  }

  console.log("outside");

  return (
    <m.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={
        windowWidth > 414
          ? { delay: 0.4, ease: "backOut", duration: 0.6 }
          : { delay: 0.4, duration: 0.6 }
      }
      className={styles.push}
      style={!isGameboard && { height: "auto" }}
    >
      {children}
    </m.div>
  );
};

export default PushAnimation;
