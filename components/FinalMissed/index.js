import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import FlipAnimation from "../FlipAnimation";
import styles from "./styles.module.css";

const FinalMissed = () => {
  const [isVisible, setIsVisible] = useState(true);

  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 1000);
    const pushTimeout = setTimeout(() => {
      router.push("/gameboard/final/results");
    }, 5000);
    return () => clearTimeout(pushTimeout);
  }, []);

  return (
    <FlipAnimation
      isVisible={isVisible}
      background={"var(--light-blue-gradient)"}
    >
      <div className={styles.sorryContainer}>
        <h2>
          Sorry, You don&apos;t have sufficient funds <br /> to paricipate in
        </h2>
        <h1>Final Jeopardy!</h1>
        <h2 className={styles.sorry}>Better luck next time!</h2>
      </div>
    </FlipAnimation>
  );
};

export default FinalMissed;
