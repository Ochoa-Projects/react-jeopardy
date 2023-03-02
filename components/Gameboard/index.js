import { motion as m } from "framer-motion";
import Link from "next/link";
import { useGame } from "../../context/GameContext";
import PlayerScores from "../PlayerScores";
import CatergoriesRow from "../CategoriesRow";
import ValueBoard from "../ValueBoard";
import styles from "./styles.module.css";

const Gameboard = () => {
  const { gameStage, setGameStage, setAttempts } = useGame();

  const categories =
    gameStage === "single" ? singleCategories : doubleCategories;

  const handleHomeClick = () => {
    setAttempts([]);
    setGameStage("single");
  };

  return (
    <>
      <m.div
        className={styles.topRow}
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ ease: "backOut", duration: 0.4 }}
      >
        <h1>{gameStage === "single" ? "SINGLE" : "DOUBLE"} JEOPARDY</h1>
        <PlayerScores />
        <Link href="/" className={styles.menuButton} onClick={handleHomeClick}>
          &#9776;
        </Link>
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
