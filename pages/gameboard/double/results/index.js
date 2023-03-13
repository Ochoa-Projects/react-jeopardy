import PageContainer from "../../../../components/PageContainer";
import Results from "../../../../components/Results";
import ResultsButton from "../../../../components/ResultsButton";
import ResultsHeading from "../../../../components/ResultsHeading";
import { useGame } from "../../../../context/GameContext";

const DoubleResults = () => {
  const { playerScores } = useGame();
  const playerValues = Object.values(playerScores);
  const sortedPlayerValues = playerValues.sort((a, b) => b.score - a.score);

  return (
    <PageContainer>
      <ResultsHeading gameStage={"Double"} />
      <Results players={sortedPlayerValues} />
      <ResultsButton href="/gameboard/final" text="Next Stage" />
    </PageContainer>
  );
};

export default DoubleResults;
