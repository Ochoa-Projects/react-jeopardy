import { useEffect } from "react";
import Confetti from "react-confetti";
import PageContainer from "../../../../components/PageContainer";
import Results from "../../../../components/Results";
import RestartButton from "../../../../components/RestartButton";
import ResultsHeading from "../../../../components/ResultsHeading";
import { useGame } from "../../../../context/GameContext";
import { useAudio } from "../../../../context/AudioContext";
import styles from "./styles.module.css";

const FinalResults = () => {
  const { playerScores } = useGame();
  const { endAudio } = useAudio();
  const playerValues = Object.values(playerScores);
  const sortedPlayerValues = playerValues.sort((a, b) => b.score - a.score);

  useEffect(() => {
    setTimeout(() => {
      endAudio.currentTime = 0.8;
      endAudio.play();
    });
    return () => {
      endAudio.pause();
    };
  }, []);

  return (
    <PageContainer>
      <Confetti recycle={false} numberOfPieces={3000} />
      <ResultsHeading gameStage={"Final"} />
      <Results players={sortedPlayerValues} />
      <div className={styles.buttonContainer}>
        <RestartButton />
      </div>
    </PageContainer>
  );
};

export default FinalResults;
