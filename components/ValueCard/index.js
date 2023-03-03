import { useRouter } from "next/router";
import { useGame } from "../../context/GameContext";
import styles from "./styles.module.css";

const ValueCard = ({ i, j, question }) => {
  const router = useRouter();
  const { attempts, setAttempts, gameStage } = useGame();

  const value = gameStage === "single" ? (j + 1) * 200 : (j + 1) * 400;

  const handleValueCardClick = () => {
    setAttempts((prev) => [...prev, `${i}${j}`]);
    if (!question.isDailyDouble) {
      router.push({
        pathname: `/gameboard/${gameStage}/questions/${question.slug}`,
        query: { value },
      });
    } else {
      router.push({
        pathname: `/gameboard/${gameStage}/questions/${question.slug}`,
        query: { value: "daily-double" },
      });
    }
  };

  const isAttempted = attempts.includes(`${i}${j}`);

  return (
    <div
      className={styles.valueBoardItem}
      style={{ gridColumn: i + 1, gridRow: j + 1 }}
    >
      <div onClick={handleValueCardClick}>{!isAttempted && `$${value}`}</div>
    </div>
  );
};

export default ValueCard;
