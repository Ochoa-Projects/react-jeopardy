import { useState } from "react";
import { useRouter } from "next/router";
import Confetti from "react-confetti";
import getTimerDuration from "../../utils/getTimerDuration";
import FlipAnimation from "../FlipAnimation";
import QuestionHeading from "../QuestionHeading";
import QuestionText from "../QuestionText";
import Timer from "../Timer";
import AnswerSubmission from "../AnswerSubmission";

const Question = ({ questionResponse, selectedDifficulty }) => {
  const [correct, setCorrect] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  const seconds = getTimerDuration(selectedDifficulty);
  const { question, category, answer } = questionResponse;
  const {
    query: { value },
  } = router;

  return (
    <>
      {correct && <Confetti recycle={false} numberOfPieces={1000} />}
      <FlipAnimation
        isVisible={isVisible}
        background={"var(--light-blue-gradient)"}
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
      </FlipAnimation>
    </>
  );
};

export default Question;
