import { useState } from "react";
import { useRouter } from "next/router";
import { motion as m, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import getTimerDuration from "../../utils/getTimerDuration";
import IncorrectGraphic from "../IncorrectGraphic";
import QuestionHeading from "../QuestionHeading";
import QuestionText from "../QuestionText";
import Timer from "../Timer";
import AnswerSubmission from "../AnswerSubmission";
import styles from "./styles.module.css";

const Question = ({ questionResponse, selectedDifficulty }) => {
  const [correct, setCorrect] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  const { question, category, answer } = questionResponse;
  const {
    query: { value },
  } = router;

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
            {correct === false && <IncorrectGraphic />}
            <QuestionHeading category={category} value={value} />
            <QuestionText question={question} />
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

export default Question;
