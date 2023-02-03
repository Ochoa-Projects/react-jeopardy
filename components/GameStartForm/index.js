import { useState } from "react";
import styles from "./styles.module.css";

const GameStartForm = () => {
  const [selected, setSelected] = useState("Normal");
  const difficulties = ["Easy", "Normal", "Hard"];

  const handleSelected = (difficulty) => {
    selected !== difficulty ? setSelected(difficulty) : null;
  };
  return (
    <form action="/gameboard" className={styles.homepageForm}>
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
    </form>
  );
};

export default GameStartForm;
