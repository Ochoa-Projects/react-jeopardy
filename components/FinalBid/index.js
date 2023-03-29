import { useState } from "react";
import { useRouter } from "next/router";
import { useGame } from "../../context/GameContext";
import styles from "./styles.module.css";

const FinalBid = () => {
  const [bid, setBid] = useState(1);
  const [error, setError] = useState("");

  const { finalSlug, finalCategory, playerScores, setAttempts } = useGame();
  const router = useRouter();

  const playerScore = playerScores.player1.score;
  const playerScoreString = playerScore.toString();

  const handleSubmit = () => {
    if (bid > playerScore) {
      setError(`Bid Limit: {$${playerScore}}`);
    } else if (bid < 1) {
      setError("Enter Bid > 0");
    } else {
      setAttempts(["FINAL"]);
      router.push({
        pathname: `/gameboard/final/questions/${finalSlug}`,
        query: { value: bid },
      });
    }
  };

  return (
    <>
      <h1 className={styles.header}>
        WELCOME TO FINAL <br /> JEOPARDY!
      </h1>
      <h1 className={styles.categoryMessage}>
        TODAY&apos;S CATEGORY IS
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
      {error && <span className={styles.validation}>{error}</span>}
    </>
  );
};

export default FinalBid;
