import Link from "next/link";
import PageContainer from "../../../../components/PageContainer";
import { useGame } from "../../../../context/GameContext";

const DoubleResults = () => {
  const { playerScores } = useGame();
  const playerValues = Object.values(playerScores);
  const sortedPlayerValues = playerValues.sort((a, b) => b.score - a.score);

  return (
    <PageContainer>
      <p>Double Results</p>
      <ol>
        {sortedPlayerValues.map((player, index) => (
          <li key={index + player.name}>
            <span>{player.name}</span>:<span>{player.score}</span>
          </li>
        ))}
      </ol>
      <Link href="/gameboard/final">Next Stage</Link>
    </PageContainer>
  );
};

export default DoubleResults;
