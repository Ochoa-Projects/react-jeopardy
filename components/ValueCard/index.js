import { useRouter } from "next/router";
import { useGame } from "../../context/GameContext";
import styles from "./styles.module.css";

const ValueCard = ({ i, j }) => {
  const router = useRouter();
  const { attempts, setAttempts } = useGame();

  const handleValueCardClick = () => {
    setAttempts((prev) => [...prev, `${i}${j}`]);
    router.push("/gameboard/questions/123");
  };

  const isAttempted = attempts.includes(`${i}${j}`);

  return (
    <div
      className={styles.valueBoardItem}
      style={{ gridColumn: i + 1, gridRow: j + 1 }}
    >
      <div onClick={handleValueCardClick}>
        {!isAttempted && `$${(j + 1) * 200}`}
      </div>
    </div>
  );
};

export default ValueCard;
