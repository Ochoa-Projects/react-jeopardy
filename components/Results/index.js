import styles from "./styles.module.css";

const Results = ({ players }) => {
  return (
    <div className={styles.playerListBorder}>
      <ol className={styles.playerList}>
        {players.map((player, index) => (
          <li key={index + player.name}>
            <span className={styles.playerName}>{player.name}:</span>
            <span> ${player.score}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Results;
