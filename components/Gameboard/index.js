import { useEffect } from "react";
import { useGame } from "../../context/GameContext";
import { useAudio } from "../../context/AudioContext";
import useWindowSize from "../../hooks/useWindowSize";
import PlayerScores from "../PlayerScores";
import PlayerScoresSmall from "../PlayerScoresSmall";
import CatergoriesRow from "../CategoriesRow";
import ValueBoard from "../ValueBoard";
import styles from "./styles.module.css";
import MuteButton from "../MuteButton";
import HomeButton from "../HomeButton";
import DropAnimation from "../DropAnimation";
import PushAnimation from "../PushAnimation";

const Gameboard = () => {
  const { singleCategories, doubleCategories, gameStage } = useGame();

  const { boardFillAudio } = useAudio();
  const { width } = useWindowSize();

  const categories =
    gameStage === "single" ? singleCategories : doubleCategories;

  useEffect(() => {
    boardFillAudio.play();
  }, []);

  return (
    <>
      <HomeButton />
      <MuteButton />
      <DropAnimation>
        <div className={styles.topRow}>
          <h1>{gameStage === "single" ? "SINGLE" : "DOUBLE"} JEOPARDY</h1>
          {width > 700 ? <PlayerScores /> : <PlayerScoresSmall />}
        </div>
      </DropAnimation>
      <PushAnimation isGameboard={true}>
        <div className={styles.gameboardBorder}>
          <CatergoriesRow categories={categories} />
          <ValueBoard />
        </div>
      </PushAnimation>
    </>
  );
};

export default Gameboard;
