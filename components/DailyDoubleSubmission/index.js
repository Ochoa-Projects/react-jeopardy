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

  const { playerScores, setPlayerScores, gameStage, prevGameStage, attempts } =
    useGame();
  const { smallWinAudio, thinkingAudio, timesUpAudio } = useAudio();
  const router = useRouter();

  const answers = convertAnswers(answer);
  const correctAnswer = convertFirstAnswer(answer);
  const playerScore = playerScores.player1.score;
  const playerScoreString = playerScore.toString();

  const handleSubmit = () => {
    if (bid > playerScore || bid < 1) {
      setIsBidValid(false);
      return;
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
      if (!attempts.length) {
        router.push(`/gameboard/${prevGameStage}/results`);
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
          max={playerScoreString}
        />
        {!isBidValid && (
          <span className={styles.validation}>
            {`Bid must be greater than 0 and no more than your current score {$${playerScore}}!`}
          </span>
        )}
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
