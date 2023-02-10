import { useState } from "react";
import { motion as m } from "framer-motion";
import styles from "./styles.module.css";

const GameStartForm = () => {
  const [selected, setSelected] = useState("Normal");
  const difficulties = ["Easy", "Normal", "Hard"];

  const handleSelected = (difficulty) => {
    selected !== difficulty ? setSelected(difficulty) : null;
  };
  return (
    <m.form
      action="/gameboard"
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
            className={`${selected === difficulty && styles.selected} ${
              styles.difficultyButton
            }`}
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
      <button type="submit" className={styles.startButton}>
        START
      </button>
    </m.form>
  );
};

export default GameStartForm;
