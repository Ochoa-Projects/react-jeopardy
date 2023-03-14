import Link from "next/link";
import { useGame } from "../../context/GameContext";
import styles from "./styles.module.css";

const ContinueButton = () => {
  const { gameStage } = useGame();

  return (
    <Link href={`/gameboard/${gameStage}`} className={styles.button}>
      Continue
    </Link>
  );
};

export default ContinueButton;
