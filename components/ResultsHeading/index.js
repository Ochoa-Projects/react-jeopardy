import MuteButton from "../MuteButton";
import DropAnimation from "../DropAnimation";
import styles from "./styles.module.css";

const ResultsHeading = ({ gameStage }) => {
  return (
    <>
      <MuteButton />
      <DropAnimation>
        <h1 className={styles.heading}>{gameStage} Results</h1>
      </DropAnimation>
    </>
  );
};

export default ResultsHeading;
