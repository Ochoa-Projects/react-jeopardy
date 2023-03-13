import styles from "./styles.module.css";

const ResultsHeading = ({ gameStage }) => {
  return <h1 className={styles.heading}>{gameStage} Results</h1>;
};

export default ResultsHeading;
