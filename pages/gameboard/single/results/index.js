import PageContainer from "../../../../components/PageContainer";
import Results from "../../../../components/Results";
import RestartButton from "../../../../components/RestartButton";
import ContinueButton from "../../../../components/ContinueButton";
import ResultsHeading from "../../../../components/ResultsHeading";
import { useGame } from "../../../../context/GameContext";
import styles from "./styles.module.css";
import { useEffect } from "react";

const SingleResults = () => {
  const { playerScores, setGameStage } = useGame();
  const playerValues = Object.values(playerScores);
  const sortedPlayerValues = playerValues.sort((a, b) => b.score - a.score);

  useEffect(() => {
    setGameStage("double");
  }, []);

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
