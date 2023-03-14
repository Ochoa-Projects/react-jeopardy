import { motion as m } from "framer-motion";
import { useEffect } from "react";
import { useGame } from "../../context/GameContext";
import { useAudio } from "../../context/AudioContext";
import PlayerScores from "../PlayerScores";
import CatergoriesRow from "../CategoriesRow";
import ValueBoard from "../ValueBoard";
import styles from "./styles.module.css";
import MuteButton from "../MuteButton";
import HomeButton from "../HomeButton";

const Gameboard = () => {
  const { singleCategories, doubleCategories, gameStage } = useGame();

  const { boardFillAudio } = useAudio();

  const categories =
    gameStage === "single" ? singleCategories : doubleCategories;

  useEffect(() => {
    boardFillAudio.play();
  }, []);

  return (
    <>
      <HomeButton />
      <MuteButton />
      <m.div
        className={styles.topRow}
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ ease: "backOut", duration: 0.4 }}
      >
        <h1>{gameStage === "single" ? "SINGLE" : "DOUBLE"} JEOPARDY</h1>
        <PlayerScores />
      </m.div>
      <m.div
        className={styles.gameboardBorder}
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: 0.4, ease: "backOut", duration: 0.6 }}
      >
        <CatergoriesRow categories={categories} />
        <ValueBoard />
      </m.div>
    </>
  );
};

export default Gameboard;
