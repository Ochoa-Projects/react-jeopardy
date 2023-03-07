import { useState } from "react";
import { motion as m, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import getTimerDuration from "../../utils/getTimerDuration";
import QuestionHeading from "../QuestionHeading";
import QuestionText from "../QuestionText";
import Timer from "../Timer";
import AnswerSubmission from "../AnswerSubmission";
import styles from "./styles.module.css";

const FinalQuestion = ({ questionResponse, value, selectedDifficulty }) => {
  const [correct, setCorrect] = useState(null);
  const [isVisible, setIsVisible] = useState(true);

  const { question, category, answer } = questionResponse;

  const seconds = getTimerDuration(selectedDifficulty);

  return (
    <>
      {correct && <Confetti recycle={false} numberOfPieces={1000} />}
      <AnimatePresence>
        {isVisible && (
          <m.div
            key="question"
            className={styles.container}
            initial={{ rotateY: 180, scale: 0.05 }}
            animate={{ rotateY: 0, scale: 1 }}
            transition={{ duration: 1 }}
            exit={{
              rotateY: 180,
              scale: 0,
              transition: { duration: 1, delay: 3 },
            }}
          >
            <h1 className={styles.finalHeading}>
              FINAL JEOPARDY - {category} - ${value}
            </h1>
            <QuestionText question={question} correct={correct} />
            <Timer
              seconds={seconds}
              correct={correct}
              setCorrect={setCorrect}
              setIsVisible={setIsVisible}
              value={value}
            />
            <AnswerSubmission
              correct={correct}
              setCorrect={setCorrect}
              setIsVisible={setIsVisible}
              answer={answer}
              value={value}
            />
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FinalQuestion;
