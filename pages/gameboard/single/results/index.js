import PageContainer from "../../../../components/PageContainer";
import Results from "../../../../components/Results";
import RestartButton from "../../../../components/RestartButton";
import ContinueButton from "../../../../components/ContinueButton";
import ResultsHeading from "../../../../components/ResultsHeading";
import { useGame } from "../../../../context/GameContext";
import styles from "./styles.module.css";

const SingleResults = () => {
  const { playerScores } = useGame();
  const playerValues = Object.values(playerScores);
  const sortedPlayerValues = playerValues.sort((a, b) => b.score - a.score);

  return (
    <PageContainer>
      <ResultsHeading gameStage={"Single"} />
      <Results players={sortedPlayerValues} />
      <div className={styles.buttonsContainer}>
        <RestartButton />
        <ContinueButton href="/gameboard/double" />
      </div>
    </PageContainer>
  );
};

export default SingleResults;
