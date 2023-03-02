import { useRouter } from "next/router";
import { useState } from "react";
import { useGame } from "../../context/GameContext";
import addToComputerScore from "../../utils/addToComputerScore";
import addToPlayerScore from "../../utils/addToPlayerScore";

import convertAnswers from "../../utils/convertAnswers";
import subtractFromPlayerScore from "../../utils/subtractFromPlayerScore";
import CorrectAnswer from "../CorrectAnswer";
import styles from "./styles.module.css";

const AnswerSubmission = ({
  correct,
  setCorrect,
  setIsVisible,
  answer,
  value,
}) => {
  const [attemptedAnswer, setAttemptedAnswer] = useState("");

  const { setPlayerScores } = useGame();
  const router = useRouter();

  const answers = convertAnswers(answer);
  console.log(answers);

  const handleSubmit = () => {
    if (answers.includes(attemptedAnswer.toLowerCase())) {
      setCorrect(true);
      addToPlayerScore(value, setPlayerScores);
    } else {
      setCorrect(false);
      subtractFromPlayerScore(value, setPlayerScores);
      addToComputerScore(value, setPlayerScores);
    }
    // setTimeout(() => {
    //   setIsVisible(false);
    // }, 1000);
    // setTimeout(() => {
    //   router.push("/gameboard");
    // }, 5000);
  };

  return (
    <div method="post" className={styles.answerForm}>
      {correct === false && <CorrectAnswer answer={answers[0]} />}
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
      </div>
      <button
        onClick={handleSubmit}
        disabled={correct === true || correct === false || !attemptedAnswer}
      >
        Submit
      </button>
    </div>
  );
};

export default AnswerSubmission;
