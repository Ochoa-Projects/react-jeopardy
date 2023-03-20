import Link from "next/link";
import { useGame } from "../../context/GameContext";
import FadeInAnimation from "../FadeInAnimation";
import styles from "./styles.module.css";

const RestartButton = () => {
  const { setGameStage } = useGame();

  const handleRestart = () => {
    setGameStage("single");
  };

  return (
    <FadeInAnimation>
      <Link href="/" className={styles.button} onClick={handleRestart}>
        Restart
      </Link>
    </FadeInAnimation>
  );
};

export default RestartButton;
