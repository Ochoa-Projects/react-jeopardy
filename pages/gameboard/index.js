import Link from "next/link";
import { motion as m } from "framer-motion";
import { useEffect } from "react";
import { useRouter } from "next/router";
import PageContainer from "../../components/PageContainer";
import CatergoriesRow from "../../components/CategoriesRow";
import ValueBoard from "../../components/ValueBoard";
import Loading from "../../components/Loading";
import { useGame } from "../../context/GameContext";
import styles from "./styles.module.css";
import PlayerScores from "../../components/PlayerScores";

export default function Gameboard() {
  const { singleCategories, doubleCategories, gameStage } = useGame();
  const router = useRouter();

  const categories = (() => {
    if (gameStage === "single") {
      return singleCategories;
    } else {
      return doubleCategories;
    }
  })();

  useEffect(() => {
    if (!categories.length) {
      window.location.href = "/";
    }

    window.onbeforeunload = () => true;
    history.pushState(null, null, window.location.href);
    window.onpopstate = () => {
      const leavePage = confirm(
        "This will end your progress. Are you sure you want to do this?"
      );
      if (leavePage) {
        router.push("/");
      } else {
        history.pushState(null, null, window.location.href);
      }
    };
  }, []);

  if (!categories.length) {
    return <Loading />;
  }

  return (
    <PageContainer>
      <m.div
        className={styles.topRow}
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ ease: "backOut", duration: 0.4 }}
      >
        <h1>{gameStage === "single" ? "SINGLE" : "DOUBLE"} JEOPARDY</h1>
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
        <CatergoriesRow categories={categories} />
        <ValueBoard />
      </m.div>
    </PageContainer>
  );
}
