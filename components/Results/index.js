import { useGame } from "../../context/GameContext";
import useWindowSize from "../../hooks/useWindowSize";
import Loading from "../Loading";
import PushAnimation from "../PushAnimation";
import styles from "./styles.module.css";

const Results = () => {
  const { playerScores } = useGame();
  const { width } = useWindowSize();

  const playerValues = Object.values(playerScores);
  const sortedPlayerValues = playerValues.sort((a, b) => b.score - a.score);

  if (!width) {
    return <Loading />;
  }

  return (
    <PushAnimation isGameboard={false} width={width}>
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
