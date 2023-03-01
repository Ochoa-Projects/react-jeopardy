import { useGame } from "../../context/GameContext";
import styles from "./styles.module.css";

const PlayerScores = () => {
  const {
    playerScores: { player1, player2, player3 },
  } = useGame();

  return (
    <div className={styles.playerScoresBorder}>
      <div className={styles.playerScores}>
        <div className={styles.playerContainer}>
          {player1.name}:{" "}
          {player1.score < 0 ? (
            <span>-${Math.abs(player1.score)}</span>
          ) : (
            <span>${player1.score}</span>
          )}
        </div>
        <div className={styles.playerContainer}>
          {player2.name}: <span>${player2.score}</span>
        </div>
        <div className={styles.playerContainer}>
          {player3.name}: <span>${player3.score}</span>
        </div>
      </div>
    </div>
  );
};

export default PlayerScores;
