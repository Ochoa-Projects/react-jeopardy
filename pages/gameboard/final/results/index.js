import { useEffect } from "react";
import PageContainer from "../../../../components/PageContainer";
import Results from "../../../../components/Results";
import ResultsButton from "../../../../components/ResultsButton";
import ResultsHeading from "../../../../components/ResultsHeading";
import { useGame } from "../../../../context/GameContext";
import { useAudio } from "../../../../context/AudioContext";

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
      <ResultsHeading gameStage={"Final"} />
      <Results players={sortedPlayerValues} />
      <ResultsButton href="/" text="Restart" />
    </PageContainer>
  );
};

export default FinalResults;
