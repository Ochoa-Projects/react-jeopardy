import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Confetti from "react-confetti";
import getTimerDuration from "../../utils/getTimerDuration";
import QuestionHeading from "../QuestionHeading";
import QuestionText from "../QuestionText";
import Timer from "../Timer";
import FlipAnimation from "../FlipAnimation";
import DailyDoubleSubmission from "../DailyDoubleSubmission";

const DailyDoubleQuestion = ({ questionResponse, selectedDifficulty }) => {
  const [correct, setCorrect] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();
  const doubleAudio = new Audio("/sounds/daily-double.mp3");
  const thinkingAudio = new Audio("/sounds/thinking.mp3");
  const timesUpAudio = new Audio("/sounds/times-up.mp3");

  const { question, category, answer } = questionResponse;
  const {
    query: { value },
  } = router;

  const seconds = getTimerDuration(selectedDifficulty) * 2;

  useEffect(() => {
    doubleAudio.volume = 0.2;
    doubleAudio.play();
    setTimeout(() => {
      thinkingAudio.volume = 0.5;
      thinkingAudio.play();
    }, 2500);
  }, []);

  return (
    <>
      {correct && <Confetti recycle={false} numberOfPieces={1000} />}
      <FlipAnimation isVisible={isVisible} background={'url("/stars.jpg")'}>
        <QuestionHeading category={category} value={"Daily Double"} />
        <QuestionText question={question} correct={correct} />
        <Timer
          seconds={seconds}
          correct={correct}
          setCorrect={setCorrect}
          setIsVisible={setIsVisible}
          value={value}
          thinkingAudio={thinkingAudio}
          timesUpAudio={timesUpAudio}
        />
        <DailyDoubleSubmission
          correct={correct}
          setCorrect={setCorrect}
          setIsVisible={setIsVisible}
          answer={answer}
          thinkingAudio={thinkingAudio}
          timesUpAudio={timesUpAudio}
        />
      </FlipAnimation>
    </>
  );
};

export default DailyDoubleQuestion;
