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

export default function Home({
  singleCategories,
  doubleCategories,
  singleSlugs,
  doubleSlugs,
}) {
  const {
    setSingleCategories,
    setDoubleCategories,
    setSingleSlugs,
    setDoubleSlugs,
    setAttempts,
    setPlayerScores,
  } = useGame();

  useEffect(() => {
    setSingleCategories(singleCategories);
    setDoubleCategories(doubleCategories);
    setSingleSlugs(singleSlugs);
    setDoubleSlugs(doubleSlugs);
    setAttempts([]);
    setPlayerScores(initialPlayerState);
  }, []);

  return (
    <>
      <Head>
        <title>React Jeopardy</title>
      </Head>
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
    </>
  );
}

export async function getServerSideProps() {
  const [singleCategories, doubleCategories, finalCategory] =
    await randomizeCategories();
  const singleSlugs = await randomizeSlugs(singleCategories);
  const doubleSlugs = await randomizeSlugs(doubleCategories);
  const finalSlug = await getFinalSlug(finalCategory);

  console.log(finalSlug);

  return {
    props: {
      singleCategories,
      doubleCategories,
      singleSlugs,
      doubleSlugs,
      finalSlug,
    },
  };
}
