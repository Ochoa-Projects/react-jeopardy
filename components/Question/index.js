import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Confetti from "react-confetti";
import getTimerDuration from "../../utils/getTimerDuration";
import FlipAnimation from "../FlipAnimation";
import QuestionHeading from "../QuestionHeading";
import QuestionText from "../QuestionText";
import Timer from "../Timer";
import AnswerSubmission from "../AnswerSubmission";
import MuteButton from "../MuteButton";
import { useAudio } from "../../context/AudioContext";

const Question = ({ questionResponse, selectedDifficulty }) => {
  const [correct, setCorrect] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  const { thinkingAudio } = useAudio();

  const seconds = getTimerDuration(selectedDifficulty);
  const { question, category, answer } = questionResponse;
  const {
    query: { value },
  } = router;

  useEffect(() => {
    thinkingAudio.currentTime = 0;
    thinkingAudio.play();
  }, []);

  return (
    <>
      {correct && <Confetti recycle={false} numberOfPieces={1000} />}
      <FlipAnimation
        isVisible={isVisible}
        background={"var(--light-blue-gradient)"}
      >
        <MuteButton />
        <QuestionHeading category={category} value={value} />
        <QuestionText question={question} correct={correct} />
        <Timer
          seconds={seconds}
          correct={correct}
          setCorrect={setCorrect}
          setIsVisible={setIsVisible}
          value={value}
          thinkingAudio={thinkingAudio}
        />
        <AnswerSubmission
          correct={correct}
          setCorrect={setCorrect}
          setIsVisible={setIsVisible}
          answer={answer}
          value={value}
          thinkingAudio={thinkingAudio}
        />
      </FlipAnimation>
    </>
  );
};

export default Question;
