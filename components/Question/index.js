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
import useWindowSize from "../../hooks/useWindowSize";

const Question = ({ questionResponse, selectedDifficulty }) => {
  const [correct, setCorrect] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  const { thinkingAudio } = useAudio();
  const { width, height } = useWindowSize();

  const seconds = getTimerDuration(selectedDifficulty);
  const { question, category, answer } = questionResponse;
  const {
    query: { value },
  } = router;

  useEffect(() => {
    setTimeout(() => {
      thinkingAudio.currentTime = 0;
      thinkingAudio.play();
    });
    return () => {
      thinkingAudio.pause();
    };
  }, []);

  return (
    <>
      {correct && (
        <Confetti
          recycle={false}
          numberOfPieces={1000}
          width={width}
          height={height}
        />
      )}
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
