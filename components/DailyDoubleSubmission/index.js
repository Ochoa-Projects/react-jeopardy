import { useRouter } from "next/router";
import { useState } from "react";
import { useAudio } from "../../context/AudioContext";
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
}) => {
  const [attemptedAnswer, setAttemptedAnswer] = useState("");
  const [bid, setBid] = useState(1);
  const [isBidValid, setIsBidValid] = useState(true);
  const [error, setError] = useState();

  const { playerScores, setPlayerScores, gameStage, attempts } = useGame();
  const { smallWinAudio, thinkingAudio, timesUpAudio } = useAudio();
  const router = useRouter();

  const answers = convertAnswers(answer);
  const correctAnswer = convertFirstAnswer(answer);
  const highestBoardValue = gameStage === "single" ? 1000 : 2000;
  const playerScore = playerScores.player1.score;
  const bidLimit =
    playerScore < highestBoardValue ? highestBoardValue : playerScore;
  const bidLimitToString = playerScore.toString();

  const handleSubmit = () => {
    if (bid > bidLimit || bid < 1) {
      setIsBidValid(false);
      setError(
        `Bid must be greater than 0 and no more than your bid limit: {$${bidLimit}}!`
      );
      return;
    }

    if ((playerScore < 0 && bid > bidLimit) || bid < 1) {
      setIsBidValid(false);
      setError(`Bid`);
    }
    thinkingAudio.pause();
    if (answers.includes(attemptedAnswer.toLowerCase())) {
      smallWinAudio.play();
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
      if (attempts.length === 2 || attempts[0] === "FINAL") {
        router.push(`/gameboard/${gameStage}/results`);
      } else {
        router.push(`/gameboard/${gameStage}`);
      }
    }, 5000);
  };

  return (
    <div method="post" className={styles.answerForm}>
      {correct === false && <CorrectAnswer answer={correctAnswer} />}
      <div className={styles.bidContainer}>
        <span className={styles.answerText}>Enter Bid: $</span>
        <input
          id="bid"
          type="number"
          placeholder="Place bid here..."
          value={bid}
          onChange={(e) => setBid(e.target.value)}
          className={styles.bidInput}
          min="1"
          max={bidLimitToString}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        />
        {!isBidValid && <span className={styles.validation}>{error}</span>}
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
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
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
