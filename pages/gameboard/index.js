import Link from "next/link";
import { motion as m } from "framer-motion";

import PageContainer from "../../components/PageContainer";
import PlayerScores from "../../components/PlayerScores";
import CatergoriesRow from "../../components/CategoriesRow";
import ValueBoard from "../../components/ValueBoard";
import { useGame } from "../../context/GameContext";
import styles from "./styles.module.css";
import { useEffect } from "react";

export default function Gameboard() {
  const { singleCategories, setSingleCategories } = useGame();

  useEffect(() => {
    if (!singleCategories.length) {
      let storage = JSON.parse(window.localStorage.getItem("STATE"));
      setSingleCategories(storage.singleCategories);
    }
  }, []);

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
        <Link href="/" className={styles.menuButton}>
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
