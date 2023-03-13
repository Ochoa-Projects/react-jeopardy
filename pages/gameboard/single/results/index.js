import Link from "next/link";
import PageContainer from "../../../../components/PageContainer";
import Results from "../../../../components/Results";
import { useGame } from "../../../../context/GameContext";

const SingleResults = () => {
  const { playerScores } = useGame();
  const playerValues = Object.values(playerScores);
  const sortedPlayerValues = playerValues.sort((a, b) => b.score - a.score);

  return (
    <PageContainer>
      <p>Single Results</p>
      <Results players={sortedPlayerValues} />
      <Link href="/gameboard/double">Next Stage</Link>
    </PageContainer>
  );
};

export default SingleResults;
