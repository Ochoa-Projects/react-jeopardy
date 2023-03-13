import styles from "./styles.module.css";

const Results = ({ players }) => {
  return (
    <ol>
      {players.map((player, index) => (
        <li key={index + player.name}>
          <span>{player.name}</span>:<span>{player.score}</span>
        </li>
      ))}
    </ol>
  );
};

export default Results;
