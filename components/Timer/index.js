import { useState, useEffect } from "react";

import styles from "./styles.module.css";

const Timer = ({ seconds }) => {
  const [secondsRemaining, setSecondsRemaining] = useState(seconds);

  const decrementTimer = () => setSecondsRemaining((prev) => prev - 1);

  useEffect(() => {
    if (secondsRemaining <= 0) return;

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
