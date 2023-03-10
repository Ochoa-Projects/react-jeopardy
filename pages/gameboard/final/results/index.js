import Link from "next/link";
import PageContainer from "../../../../components/PageContainer";
import { useGame } from "../../../../context/GameContext";

const FinalResults = () => {
  const { playerScores } = useGame();
  const playerValues = Object.values(playerScores);
  const sortedPlayerValues = playerValues.sort((a, b) => b.score - a.score);

  return (
    <PageContainer>
      <p>Final Results</p>
      <ol>
        {sortedPlayerValues.map((player, index) => (
          <li key={index + player.name}>
            <span>{player.name}</span>:<span>{player.score}</span>
          </li>
        ))}
      </ol>
      <Link href="/">Go Home</Link>
    </PageContainer>
  );
};

export default FinalResults;
