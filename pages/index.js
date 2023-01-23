import Head from "next/head";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>React Jeopardy</title>
      </Head>
      <div>
        <h1>React.js Jeopardy!</h1>
        <h3>Hone in on your React skills with React Jeopardy!</h3>
        <h2>Game Difficulty</h2>
        <div>
          <p>Easy</p>
          <p>Normal</p>
          <p>Hard</p>
        </div>
        <input type="text" placeholder="Enter Your Name" />
        <button>Start</button>
      </div>
    </>
  );
}
