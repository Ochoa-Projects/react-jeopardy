import { useGame } from "../../context/GameContext";
import PushAnimation from "../PushAnimation";
import styles from "./styles.module.css";

const Results = () => {
  const { playerScores } = useGame();
  const playerValues = Object.values(playerScores);
  const sortedPlayerValues = playerValues.sort((a, b) => b.score - a.score);

  return (
    <PushAnimation isGameboard={false}>
      <div className={styles.playerListBorder}>
        <ol className={styles.playerList}>
          {sortedPlayerValues.map((player, index) => (
            <li key={index + player.name}>
              <span className={styles.playerName}>
                <span className={styles.numerator}>{index + 1}. </span>
                {player.name}:
              </span>
              <span>$ {player.score}</span>
            </li>
          ))}
        </ol>
      </div>
    </PushAnimation>
  );
};

export default Results;
