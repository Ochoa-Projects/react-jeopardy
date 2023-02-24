import { useRouter } from "next/router";
import { useState } from "react";

import convertAnswers from "../../utils/convertAnswers";
import styles from "./styles.module.css";

const AnswerSubmission = ({ correct, setCorrect, setIsVisible, answer }) => {
  const [attemptedAnswer, setAttemptedAnswer] = useState("");

  const router = useRouter();

  const answers = convertAnswers(answer);

  const handleSubmit = () => {
    if (answers.includes(attemptedAnswer.toLowerCase())) {
      setCorrect(true);
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
