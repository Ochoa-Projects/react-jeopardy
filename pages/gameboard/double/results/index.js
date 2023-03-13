import Link from "next/link";
import PageContainer from "../../../../components/PageContainer";
import Results from "../../../../components/Results";
import { useGame } from "../../../../context/GameContext";

const DoubleResults = () => {
  const { playerScores } = useGame();
  const playerValues = Object.values(playerScores);
  const sortedPlayerValues = playerValues.sort((a, b) => b.score - a.score);

  return (
    <PageContainer>
      <p>Double Results</p>
      <Results players={sortedPlayerValues} />
      <Link href="/gameboard/final">Next Stage</Link>
    </PageContainer>
  );
};

export default DoubleResults;
