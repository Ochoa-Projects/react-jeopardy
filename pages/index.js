import { useState } from "react";
import Head from "next/head";
import PageContainer from "../components/PageContainer";
import styles from "./styles.module.css";

export default function Home() {
  const [selected, setSelected] = useState("Normal");
  const difficulties = ["Easy", "Normal", "Hard"];

  const handleSelected = (difficulty) => {
    selected !== difficulty ? setSelected(difficulty) : null;
  };

  return (
    <>
      <Head>
        <title>React Jeopardy</title>
      </Head>
      <PageContainer>
        <h1 className={styles.homepageTitle}>React.js Jeopardy!</h1>
        <h3>Hone in on your React skills with React Jeopardy!</h3>
        <h2 className={styles.difficultyHeading}>Game Difficulty</h2>
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
      </PageContainer>
    </>
  );
}
