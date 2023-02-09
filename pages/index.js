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
        <h1 className={styles.homepageTitle}>React.js Jeopardy!</h1>
        <h3>Hone in on your React skills with React Jeopardy!</h3>
        <GameStartForm />
      </PageContainer>
    </>
  );
}
