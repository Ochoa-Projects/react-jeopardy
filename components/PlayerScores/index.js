import styles from "./styles.module.css";

const PlayerScores = () => {
  return (
    <div className={styles.playerScoresBorder}>
      <div className={styles.playerScores}>
        <div>Player1: $$$</div>
        <div>Player2: $$$</div>
        <div>Player3: $$$</div>
      </div>
    </div>
  );
};

export default PlayerScores;
