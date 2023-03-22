import PageContainer from "../../../../components/PageContainer";
import Results from "../../../../components/Results";
import RestartButton from "../../../../components/RestartButton";
import ContinueButton from "../../../../components/ContinueButton";
import ResultsHeading from "../../../../components/ResultsHeading";
import { useGame } from "../../../../context/GameContext";
import styles from "./styles.module.css";
import { useEffect } from "react";

const SingleResults = () => {
  const { setGameStage } = useGame();

  useEffect(() => {
    setGameStage("double");
  }, []);

  return (
    <PageContainer>
      <ResultsHeading gameStage={"Single"} />
      <Results />
      <div className={styles.buttonsContainer}>
        <RestartButton />
        <ContinueButton />
      </div>
    </PageContainer>
  );
};

export default SingleResults;
