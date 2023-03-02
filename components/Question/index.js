import { useState } from "react";
import { useRouter } from "next/router";
import { motion as m, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import getTimerDuration from "../../utils/getTimerDuration";
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

  return value === "daily-double" ? (
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
            <QuestionHeading category={category} value={"DAILY DOUBLE"} />
            <QuestionText question={question} correct={correct} />
            {/* TODO: Timer */}
            {/* This will be tricky, but possible. Value needs to be taken from BidSubmission. In order to do this, create a mini "DailyDoubleContext" to wrap
                Timer, AnswerSubmission, and BidSubmission. DailyDouble Context will store the DailyDouble value variable. In here, you can create a check...

                    if(!value) {
                      value = useDailyDouble();
                    }
                
                Set default value of Timer component to "null" in order to pass this check.    
                */}
            {/* NOTE: DailyDouble questions will have double the amount of time to be completed, as noted below in the seconds variable. */}
            <Timer
              seconds={seconds * 2}
              correct={correct}
              setCorrect={setCorrect}
              setIsVisible={setIsVisible}
              // value={value}
            />
            {/* TODO: BidSubmission */}
            {/* BidSubmission will be an input field that takes a number between the range of 1 and the player's current maximum score.
                The number input here will in essence be the new "value" variable. Make the default value 1.*/}

            {/* TODO: AnswerSubmission */}
            {/* AnswerSubmission will no longer take in a value variable, instead the value inputted to BidSubmission will be the value added/deducted
                from the player's score. No computer deductions/additions will be necessary for this submission so adjust handleSubmit accordingly.  */}
            {/* NOTE: It may be easier to combine both BidSubmission and AnswerSubmission into one component. "DailyDoubleSubmission" */}
            <AnswerSubmission
              correct={correct}
              setCorrect={setCorrect}
              setIsVisible={setIsVisible}
              answer={answer}
              // value={value}
            />
          </m.div>
        )}
      </AnimatePresence>
    </>
  ) : (
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
            <QuestionHeading category={category} value={value} />
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

export default Question;
