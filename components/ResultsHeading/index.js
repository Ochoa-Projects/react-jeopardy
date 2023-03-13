import MuteButton from "../MuteButton";
import styles from "./styles.module.css";

const ResultsHeading = ({ gameStage }) => {
  return (
    <>
      <MuteButton />
      <h1 className={styles.heading}>{gameStage} Results</h1>
    </>
  );
};

export default ResultsHeading;
