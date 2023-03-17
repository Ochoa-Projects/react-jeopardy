import PushAnimation from "../PushAnimation";
import styles from "./styles.module.css";

const Results = ({ players }) => {
  return (
    <PushAnimation>
      <div className={styles.playerListBorder}>
        <ol className={styles.playerList}>
          {players.map((player, index) => (
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
