import { useRouter } from "next/router";
import { useGame } from "../../../context/GameContext";
import PageContainer from "../../../components/PageContainer";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const FinalGameboard = () => {
  const [bid, setBid] = useState(1);
  const [isBidValid, setIsBidValid] = useState(true);

  const { finalSlug, finalCategory, playerScores, setAttempts } = useGame();
  const router = useRouter();

  const playerScore = playerScores.player1.score;
  const playerScoreString = playerScore.toString();

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
    if (bid > playerScore || bid < 0) {
      setIsBidValid(false);
    } else {
      setAttempts(["FINAL"]);
      router.push({
        pathname: `/gameboard/final/questions/${finalSlug}`,
        query: { value: bid },
      });
    }
  };

  return (
    <PageContainer>
      <h1 className={styles.header}>
        WELCOME TO FINAL <br /> JEOPARDY!
      </h1>
      <h1>
        TODAY'S CATEGORY IS
        <span className={styles.finalCategory}> {finalCategory}!</span>
      </h1>
      <h2 className={styles.bidMessage}>
        Please Enter Your Bid Before Proceeding <br />
        to the Final Question:
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
          max={playerScoreString}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      {!isBidValid && (
        <span className={styles.validation}>
          {` Bid must be greater than 0 and no more than your current score {$${playerScore}}!`}
        </span>
      )}
    </PageContainer>
  );
};

export default FinalGameboard;
