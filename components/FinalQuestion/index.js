import { useState } from "react";
import Confetti from "react-confetti";
import getTimerDuration from "../../utils/getTimerDuration";
import QuestionHeading from "../QuestionHeading";
import QuestionText from "../QuestionText";
import Timer from "../Timer";
import AnswerSubmission from "../AnswerSubmission";
import FlipAnimation from "../FlipAnimation";

const FinalQuestion = ({ questionResponse, value, selectedDifficulty }) => {
  const [correct, setCorrect] = useState(null);
  const [isVisible, setIsVisible] = useState(true);

  const seconds = getTimerDuration(selectedDifficulty);
  const { question, category, answer } = questionResponse;

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

export default FinalQuestion;
