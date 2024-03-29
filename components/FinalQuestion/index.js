import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import getTimerDuration from "../../utils/getTimerDuration";
import randomizeComputerFinalBid from "../../utils/radomizeComputerFinalBid";
import QuestionHeading from "../QuestionHeading";
import QuestionText from "../QuestionText";
import Timer from "../Timer";
import AnswerSubmission from "../AnswerSubmission";
import FlipAnimation from "../FlipAnimation";
import { useAudio } from "../../context/AudioContext";
import { useGame } from "../../context/GameContext";
import MuteButton from "../MuteButton";

const FinalQuestion = ({ questionResponse, value, selectedDifficulty }) => {
  const [correct, setCorrect] = useState(null);
  const [isVisible, setIsVisible] = useState(true);

  const { playerScores, setPlayerScores } = useGame();
  const seconds = getTimerDuration(selectedDifficulty);
  const { question, category, answer } = questionResponse;

  const { thinkingAudio } = useAudio();

  useEffect(() => {
    setTimeout(() => {
      thinkingAudio.currentTime = 0;
      thinkingAudio.play();
    });
    return () => {
      thinkingAudio.pause();
      randomizeComputerFinalBid(playerScores, setPlayerScores);
    };
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
