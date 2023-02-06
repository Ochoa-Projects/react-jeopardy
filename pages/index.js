import { useEffect, useState } from "react";
import Head from "next/head";
import PageContainer from "../components/PageContainer";
import GameStartForm from "../components/GameStartForm";
import styles from "./styles.module.css";

export default function Home() {
  const [response, setResponse] = useState();
  useEffect(() => {
    async function loadResponse() {
      const res = await fetch("/api/response");
      const data = await res.json();
      setResponse(data);
    }
    loadResponse();
  }, []);

  console.log(response);
  return (
    <>
      <Head>
        <title>React Jeopardy</title>
      </Head>
      <PageContainer>
        <h1 className={styles.homepageTitle}>React.js Jeopardy!</h1>
        <h3>Hone in on your React skills with React Jeopardy!</h3>
        <h2 className={styles.difficultyHeading}>Game Difficulty</h2>
        <GameStartForm />
      </PageContainer>
    </>
  );
}
