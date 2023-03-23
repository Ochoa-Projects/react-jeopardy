import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useGame } from "../../context/GameContext";
import { useAudio } from "../../context/AudioContext";
import addToComputerScore from "../../utils/addToComputerScore";
import styles from "./styles.module.css";
import subtractFromPlayerScore from "../../utils/subtractFromPlayerScore";

const Timer = ({ seconds, correct, setCorrect, setIsVisible, value }) => {
  const [secondsRemaining, setSecondsRemaining] = useState(1);
  const { setPlayerScores, gameStage, attempts } = useGame();
  const { thinkingAudio, timesUpAudio } = useAudio();
  const router = useRouter();

  const decrementTimer = () => {
    if (correct === null) {
      setSecondsRemaining((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (secondsRemaining === 0 && correct === null) {
      thinkingAudio.pause();
      timesUpAudio.play();
      setCorrect(false);
      setTimeout(() => {
        setIsVisible(false);
      });
      setTimeout(() => {
        value !== "daily-double" &&
          gameStage !== "final" &&
          addToComputerScore(value, setPlayerScores);
        gameStage === "final" &&
          subtractFromPlayerScore(value, setPlayerScores);
        if (attempts.length === 1 || attempts[0] === "FINAL") {
          router.push(`/gameboard/${gameStage}/results`);
        } else {
          router.push(`/gameboard/${gameStage}`);
        }
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
