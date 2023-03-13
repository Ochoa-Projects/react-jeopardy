import Link from "next/link";
import PageContainer from "../../../../components/PageContainer";
import Results from "../../../../components/Results";
import ResultsHeading from "../../../../components/ResultsHeading";
import { useGame } from "../../../../context/GameContext";

const SingleResults = () => {
  const { playerScores } = useGame();
  const playerValues = Object.values(playerScores);
  const sortedPlayerValues = playerValues.sort((a, b) => b.score - a.score);

  return (
    <PageContainer>
      <ResultsHeading gameStage={"Single"} />
      <Results players={sortedPlayerValues} />
      <Link href="/gameboard/double">Next Stage</Link>
    </PageContainer>
  );
};

export default SingleResults;
