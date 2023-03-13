import PageContainer from "../../../../components/PageContainer";
import Results from "../../../../components/Results";
import ResultsButton from "../../../../components/ResultsButton";
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
        <ResultsButton href="/" text="Restart" />
        <ResultsButton href="/gameboard/double" text="Continue" />
      </div>
    </PageContainer>
  );
};

export default SingleResults;
