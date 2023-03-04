import { useRouter } from "next/router";
import { useState } from "react";
import { useGame } from "../../context/GameContext";
import addToPlayerScore from "../../utils/addToPlayerScore";
import convertAnswers from "../../utils/convertAnswers";
import convertFirstAnswer from "../../utils/convertFirstAnswer";
import subtractFromPlayerScore from "../../utils/subtractFromPlayerScore";
import CorrectAnswer from "../CorrectAnswer";
import styles from "./styles.module.css";

const DailyDoubleSubmission = ({
  correct,
  setCorrect,
  setIsVisible,
  answer,
  thinkingAudio,
  timesUpAudio,
}) => {
  const [attemptedAnswer, setAttemptedAnswer] = useState("");
  const [bid, setBid] = useState(1);

  const { setPlayerScores, gameStage } = useGame();
  const router = useRouter();

  const answers = convertAnswers(answer);
  const correctAnswer = convertFirstAnswer(answer);

  const handleSubmit = () => {
    thinkingAudio.pause();
    if (answers.includes(attemptedAnswer.toLowerCase())) {
      setCorrect(true);
      addToPlayerScore(bid, setPlayerScores);
    } else {
      timesUpAudio.play();
      setCorrect(false);
      subtractFromPlayerScore(bid, setPlayerScores);
    }
    setTimeout(() => {
      setIsVisible(false);
    }, 1000);
    setTimeout(() => {
      router.push(`/gameboard/${gameStage}`);
    }, 5000);
  };

  return (
    <div method="post" className={styles.answerForm}>
      {correct === false && <CorrectAnswer answer={correctAnswer} />}
      <div className={styles.bidContainer}>
        <span className={styles.answerText}>Enter Bid: $</span>
        <input
          id="bid"
          placeholder="Place bid here..."
          value={bid}
          onChange={(e) => setBid(e.target.value)}
          autoComplete="off"
          className={styles.bidInput}
        />
      </div>
      <div className={styles.inputContainer}>
        <span className={styles.answerText}>What is</span>
        <input
          id="answer"
          placeholder="Enter answer here..."
          value={attemptedAnswer}
          onChange={(e) => setAttemptedAnswer(e.target.value)}
          autoComplete="off"
          className={styles.answerInput}
        />
        <span className={styles.answerText}>?</span>
        <button
          onClick={handleSubmit}
          disabled={correct === true || correct === false || !attemptedAnswer}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default DailyDoubleSubmission;
