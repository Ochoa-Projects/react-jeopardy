import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import styles from "./styles.module.css";

const Timer = ({ seconds, correct, setCorrect, setIsVisible }) => {
  const [secondsRemaining, setSecondsRemaining] = useState(seconds);
  const router = useRouter();

  const decrementTimer = () => {
    if (correct === null) {
      setSecondsRemaining((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (secondsRemaining <= 0) {
      setCorrect(false);
      setTimeout(() => {
        setIsVisible(false);
      }, 1000);
      const timeout = setTimeout(() => {
        router.push("/gameboard");
      }, 5000);
      return () => clearTimeout(timeout);
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
