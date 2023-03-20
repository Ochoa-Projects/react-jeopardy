import Link from "next/link";
import { useGame } from "../../context/GameContext";
import styles from "./styles.module.css";
import FadeInAnimation from "../FadeInAnimation";

const ContinueButton = () => {
  const { gameStage, setAttempts } = useGame();

  return (
    <FadeInAnimation>
      <Link
        href={`/gameboard/${gameStage}`}
        className={styles.button}
        onClick={() => setAttempts([])}
      >
        Continue
      </Link>
    </FadeInAnimation>
  );
};

export default ContinueButton;
