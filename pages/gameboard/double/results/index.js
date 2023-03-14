import PageContainer from "../../../../components/PageContainer";
import Results from "../../../../components/Results";
import RestartButton from "../../../../components/RestartButton";
import ContinueButton from "../../../../components/ContinueButton";
import ResultsHeading from "../../../../components/ResultsHeading";
import { useGame } from "../../../../context/GameContext";
import styles from "./styles.module.css";
import { useEffect } from "react";

const DoubleResults = () => {
  const { playerScores, setGameStage } = useGame();
  const playerValues = Object.values(playerScores);
  const sortedPlayerValues = playerValues.sort((a, b) => b.score - a.score);

  useEffect(() => {
    setGameStage("final");
  }, []);

  return (
    <PageContainer>
      <ResultsHeading gameStage={"Double"} />
      <Results players={sortedPlayerValues} />
      <div className={styles.buttonsContainer}>
        <RestartButton />
        <ContinueButton />
      </div>
    </PageContainer>
  );
};

export default DoubleResults;
