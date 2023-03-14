import Link from "next/link";
import { useGame } from "../../context/GameContext";
import styles from "./styles.module.css";

const RestartButton = () => {
  const { setGameStage } = useGame();

  const handleRestart = () => {
    setGameStage("single");
  };

  return (
    <Link href="/" className={styles.button} onClick={handleRestart}>
      Restart
    </Link>
  );
};

export default RestartButton;
