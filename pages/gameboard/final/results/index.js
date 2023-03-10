import { useGame } from "../../../../context/GameContext";

const FinalResults = () => {
  const { playerScores } = useGame();

  return <div>Final Results</div>;
};

export default FinalResults;
