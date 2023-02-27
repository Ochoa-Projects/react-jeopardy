import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useGame } from "../../context/GameContext";
import styles from "./styles.module.css";

const ValueCard = ({ i, j, slug }) => {
  const [gameStage, setGameStage] = useState();
  const router = useRouter();
  const { attempts, setAttempts } = useGame();

  const value = (j + 1) * 200;

  useEffect(() => {
    if (attempts.length < 25) {
      setGameStage("single");
    } else {
      setGameStage("double");
    }
  }, []);

  const handleValueCardClick = () => {
    setAttempts((prev) => [...prev, `${i}${j}`]);
    router.push({
      pathname: `/gameboard/${gameStage}/questions/${slug}`,
      query: { value },
    });
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
