import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Confetti from "react-confetti";
import getTimerDuration from "../../utils/getTimerDuration";
import QuestionHeading from "../QuestionHeading";
import QuestionText from "../QuestionText";
import Timer from "../Timer";
import FlipAnimation from "../FlipAnimation";
import DailyDoubleSubmission from "../DailyDoubleSubmission";
import MuteButton from "../MuteButton";
import { useAudio } from "../../context/AudioContext";

const DailyDoubleQuestion = ({ questionResponse, selectedDifficulty }) => {
  const [correct, setCorrect] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();
  const { question, category, answer } = questionResponse;
  const {
    query: { value },
  } = router;

  const { thinkingAudio } = useAudio();

  const seconds = getTimerDuration(selectedDifficulty) * 2;

  useEffect(() => {
    thinkingAudio.currentTime = 0;
    thinkingAudio.play();
  }, []);

  return (
    <>
      {correct && <Confetti recycle={false} numberOfPieces={1000} />}
      <FlipAnimation isVisible={isVisible} background={'url("/stars.jpg")'}>
        <MuteButton />
        <QuestionHeading category={category} value={"Daily Double"} />
        <QuestionText question={question} correct={correct} />
        <Timer
          seconds={seconds}
          correct={correct}
          setCorrect={setCorrect}
          setIsVisible={setIsVisible}
          value={value}
          thinkingAudio={thinkingAudio}
        />
        <DailyDoubleSubmission
          correct={correct}
          setCorrect={setCorrect}
          setIsVisible={setIsVisible}
          answer={answer}
          thinkingAudio={thinkingAudio}
        />
      </FlipAnimation>
    </>
  );
};

export default DailyDoubleQuestion;
