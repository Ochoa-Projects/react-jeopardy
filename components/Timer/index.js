import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import styles from "./styles.module.css";

const Timer = ({ seconds, setCorrect, setIsVisible }) => {
  const [secondsRemaining, setSecondsRemaining] = useState(seconds);
  const router = useRouter();

  const decrementTimer = () => setSecondsRemaining((prev) => prev - 1);

  useEffect(() => {
    if (secondsRemaining <= 0) {
      // setIsVisible(false);
      setCorrect(false);
      // setTimeout(() => {
      //   router.push("/gameboard");
      // }, 4000);
      return;
    }

    const interval = setInterval(decrementTimer, 1000);

    return () => clearInterval(interval);
  }, [decrementTimer]);

  return (
    <div className={styles.timer}>
      <span>{secondsRemaining}</span>
      <p>seconds remaining...</p>
    </div>
  );
};

export default Timer;
