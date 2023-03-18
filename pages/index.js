import Head from "next/head";
import { useEffect } from "react";
import { motion as m } from "framer-motion";
import PageContainer from "../components/PageContainer";
import GameStartForm from "../components/GameStartForm";
import { useGame } from "../context/GameContext";
import randomizeCategories from "../utils/randomizeCategories.js";
import randomizeSlugs from "../utils/randomizeSlugs.js";
import { initialPlayerState } from "../context/GameContext";
import styles from "./styles.module.css";
import getFinalSlug from "../utils/getFinalSlug";
import MuteButton from "../components/MuteButton";

export default function Home({
  singleCategories,
  doubleCategories,
  finalCategory,
  singleSlugs,
  doubleSlugs,
  finalSlug,
}) {
  const {
    setSingleCategories,
    setDoubleCategories,
    setSingleSlugs,
    setDoubleSlugs,
    setAttempts,
    setPlayerScores,
    setFinalCategory,
    setFinalSlug,
  } = useGame();

  useEffect(() => {
    setSingleCategories(singleCategories);
    setDoubleCategories(doubleCategories);
    setSingleSlugs(singleSlugs);
    setDoubleSlugs(doubleSlugs);
    setFinalCategory(finalCategory);
    setFinalSlug(finalSlug);
    setAttempts([]);
    setPlayerScores(initialPlayerState);
  }, []);

  return (
    <>
      <MuteButton />
      <Head>
        <title>React Jeopardy</title>
      </Head>
      <div className={styles.homeBorder}>
        <PageContainer>
          <m.h1
            className={styles.homepageTitle}
            initial={{ x: "-100vh" }}
            animate={{ x: 0 }}
            transition={{ ease: "backOut", duration: 0.6 }}
          >
            React.js Jeopardy!
          </m.h1>
          <h3>Hone in on your React skills with React Jeopardy!</h3>
          <GameStartForm />
        </PageContainer>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const { singleCategories, doubleCategories, finalCategory } =
    await randomizeCategories();
  const singleSlugs = await randomizeSlugs(singleCategories);
  const doubleSlugs = await randomizeSlugs(doubleCategories);
  const finalSlug = await getFinalSlug(finalCategory);

  return {
    props: {
      singleCategories,
      doubleCategories,
      finalCategory,
      singleSlugs,
      doubleSlugs,
      finalSlug,
    },
  };
}
