import { useRouter } from "next/router";
import { useState } from "react";
import { useGame } from "../../context/GameContext";
import addToPlayerScore from "../../utils/addToPlayerScore";

import convertAnswers from "../../utils/convertAnswers";
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

  const handleSubmit = () => {
    if (answers.includes(attemptedAnswer.toLowerCase())) {
      setCorrect(true);
      addToPlayerScore(value, setPlayerScores);
    } else {
      setCorrect(false);
    }
    setTimeout(() => {
      setIsVisible(false);
    }, 1000);
    setTimeout(() => {
      router.push("/gameboard");
    }, 5000);
  };

  return (
    <div method="post" className={styles.answerForm}>
      <input
        id="answer"
        placeholder="Enter answer here..."
        value={attemptedAnswer}
        onChange={(e) => setAttemptedAnswer(e.target.value)}
        autoComplete="off"
      />
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
