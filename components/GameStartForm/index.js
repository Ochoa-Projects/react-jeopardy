import { useRouter } from "next/router";
import { motion as m } from "framer-motion";
import { useState, useEffect } from "react";
import { useGame } from "../../context/GameContext";
import { useAudio } from "../../context/AudioContext";
import styles from "./styles.module.css";

const GameStartForm = () => {
  const [inputName, setInputName] = useState("");
  const [wasPlayed, setWasPlayed] = useState(false);

  const difficulties = ["Easy", "Normal", "Hard"];

  const { selectedDifficulty, setSelectedDifficulty, setPlayerScores } =
    useGame();
  const { isMuted, introAudio } = useAudio();

  const router = useRouter();

  useEffect(() => {
    if (!wasPlayed && !isMuted) {
      setWasPlayed(true);
      introAudio.currentTime = 1;
      introAudio.play();
    }
  }, [isMuted]);

  const handleSelected = (difficulty) => {
    selectedDifficulty !== difficulty
      ? setSelectedDifficulty(difficulty)
      : null;
  };

  const handleClear = () => {
    setInputName("");
  };

  const handleStart = () => {
    introAudio.pause();
    setPlayerScores((prev) => ({
      ...prev,
      player1: {
        ...prev.player1,
        name: inputName || "Player Programmer",
      },
    }));
    router.push("gameboard/single");
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
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />
      <div className={styles.buttonsContainer}>
        <button className={styles.startButton} onClick={handleClear}>
          CLEAR
        </button>
        <button className={styles.startButton} onClick={handleStart}>
          START
        </button>
      </div>
    </m.div>
  );
};

export default GameStartForm;
