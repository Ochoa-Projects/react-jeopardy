import { useGame } from "../../../../context/GameContext";

const SingleResults = () => {
  const { playerScores } = useGame();

  console.log(playerScores);

  return <div>Single Results</div>;
};

export default SingleResults;
