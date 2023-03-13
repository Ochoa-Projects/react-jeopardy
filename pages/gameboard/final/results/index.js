import Link from "next/link";
import PageContainer from "../../../../components/PageContainer";
import Results from "../../../../components/Results";
import { useGame } from "../../../../context/GameContext";

const FinalResults = () => {
  const { playerScores } = useGame();
  const playerValues = Object.values(playerScores);
  const sortedPlayerValues = playerValues.sort((a, b) => b.score - a.score);

  return (
    <PageContainer>
      <p>Final Results</p>
      <Results players={sortedPlayerValues} />
      <Link href="/">Go Home</Link>
    </PageContainer>
  );
};

export default FinalResults;
