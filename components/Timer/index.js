import { useState } from "react";
import { useRouter } from "next/router";
import { useGame } from "../../context/GameContext";
import addToComputerScore from "../../utils/addToComputerScore";
import styles from "./styles.module.css";

const Timer = ({ seconds, correct, setCorrect, setIsVisible, value }) => {
  const [secondsRemaining, setSecondsRemaining] = useState(10000000000000);
  const { setPlayerScores, gameStage } = useGame();
  const router = useRouter();

  const decrementTimer = () => {
    if (correct === null) {
      setSecondsRemaining((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (secondsRemaining === 0 && correct === null) {
      setCorrect(false);
      setTimeout(() => {
        setIsVisible(false);
      });
      setTimeout(() => {
        value !== "daily-double" && addToComputerScore(value, setPlayerScores);
        router.replace(`/gameboard/${gameStage}`);
      }, 4000);
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
