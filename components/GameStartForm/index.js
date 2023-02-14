import { useRouter } from "next/router";
import { motion as m } from "framer-motion";
import { useGame } from "../../context/GameContext";
import styles from "./styles.module.css";

const GameStartForm = () => {
  const difficulties = ["Easy", "Normal", "Hard"];

  const { selectedDifficulty, setSelectedDifficulty } = useGame();
  const router = useRouter();

  const handleSelected = (difficulty) => {
    selectedDifficulty !== difficulty
      ? setSelectedDifficulty(difficulty)
      : null;
  };

  const handleStart = () => {
    router.push("gameboard");
  };

  return (
    <m.div
      className={styles.homepageForm}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <h2 className={styles.difficultyHeading}>Game Difficulty</h2>
      <div className={styles.difficultySelection}>
        {difficulties.map((difficulty) => (
          <div
            key={difficulty}
            className={`${
              selectedDifficulty === difficulty && styles.selected
            } ${styles.difficultyButton}`}
            onClick={() => handleSelected(difficulty)}
          >
            {difficulty}
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Enter Your Name"
        className={styles.nameInput}
      />
      <button className={styles.startButton} onClick={handleStart}>
        START
      </button>
    </m.div>
  );
};

export default GameStartForm;
