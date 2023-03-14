import Link from "next/link";
import { useGame } from "../../context/GameContext";
import styles from "./styles.module.css";

const ContinueButton = () => {
  const { gameStage, setAttempts } = useGame();

  return (
    <Link
      href={`/gameboard/${gameStage}`}
      className={styles.button}
      onClick={() => setAttempts([])}
    >
      Continue
    </Link>
  );
};

export default ContinueButton;
