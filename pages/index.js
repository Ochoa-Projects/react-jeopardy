import Head from "next/head";

import { motion as m } from "framer-motion";
import PageContainer from "../components/PageContainer";
import GameStartForm from "../components/GameStartForm";
import styles from "./styles.module.css";

export default function Home() {
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
