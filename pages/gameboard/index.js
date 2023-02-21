import Link from "next/link";
import { motion as m } from "framer-motion";

import PageContainer from "../../components/PageContainer";
import PlayerScores from "../../components/PlayerScores";
import CatergoriesRow from "../../components/CategoriesRow";
import ValueBoard from "../../components/ValueBoard";
import { useGame } from "../../context/GameContext";
import styles from "./styles.module.css";

export default function Gameboard() {
  const { singleCategories, attempts, setAttempts } = useGame();

  const handleClickHomepage = () => {
    setAttempts([]);
  };

  console.log(attempts);

  return (
    <PageContainer>
      <m.div
        className={styles.topRow}
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ ease: "backOut", duration: 0.4 }}
      >
        <h1>SINGLE JEOPARDY</h1>
        <PlayerScores />
        <Link
          href="/"
          className={styles.menuButton}
          onClick={handleClickHomepage}
        >
          &#9776;
        </Link>
      </m.div>
      <m.div
        className={styles.gameboardBorder}
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: 0.4, ease: "backOut", duration: 0.6 }}
      >
        <CatergoriesRow categories={singleCategories} />
        <ValueBoard />
      </m.div>
    </PageContainer>
  );
}
