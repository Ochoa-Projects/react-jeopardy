import { useRouter } from "next/router";
import { useGame } from "../../../context/GameContext";
import PageContainer from "../../../components/PageContainer";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const FinalGameboard = () => {
  const [bid, setBid] = useState(1);

  const { finalSlug, finalCategory, gameStage, playerScores } = useGame();
  const router = useRouter();

  const playerScore = playerScores.player1.score.toString();
  console.log(playerScore);

  useEffect(() => {
    if (!finalSlug) {
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

  const handleSubmit = () => {
    console.log(finalSlug);
    router.push({
      pathname: `/gameboard/final/questions/${finalSlug}`,
      query: { value: bid },
    });
  };

  return (
    <PageContainer>
      <p>Final Gameboard</p>
      {/* TODO:  CSS*/}
      <h1 className={styles.header}>WELCOME TO FINAL JEOPARDY!</h1>
      <h1>
        TODAY'S CATEGORY IS
        <span className={styles.finalCategory}> {finalCategory}!</span>
      </h1>
      <h2 className={styles.bidMessage}>
        PLEASE ENTER YOUR BID BEFORE <br /> PROCEEDING TO THE FINAL QUESTION!!!
      </h2>
      <div className={styles.submitContainer}>
        <span>$</span>
        <input
          id="bid"
          type="number"
          placeholder="Place bid here..."
          value={bid}
          onChange={(e) => setBid(e.target.value)}
          autoComplete="off"
          min="1"
          max={playerScore}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </PageContainer>
  );
};

export default FinalGameboard;
