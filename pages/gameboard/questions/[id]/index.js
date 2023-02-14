import { useState } from "react";
import { useRouter } from "next/router";
import { motion as m, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import { useGame } from "../../../../context/GameContext";
import PageContainer from "../../../../components/PageContainer";
import styles from "./styles.module.css";

export default function Question() {
  const [correct, setCorrect] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const { selectedDifficulty } = useGame();
  const router = useRouter();

  console.log(selectedDifficulty);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsVisible(false);
    setCorrect(true);
    setTimeout(() => {
      router.push("/gameboard");
    }, 4000);
  };

  return (
    <PageContainer>
      {correct && <Confetti recycle={false} numberOfPieces={1000} />}
      <AnimatePresence>
        {isVisible && (
          <m.div
            key="question"
            className={styles.container}
            initial={{ rotateY: 180, scale: 0.05 }}
            animate={{ rotateY: 0, scale: 1 }}
            transition={{ duration: 1 }}
            exit={{
              rotateY: 180,
              scale: 0,
              transition: { duration: 1, delay: 3 },
            }}
          >
            <h1 className={styles.questionHeading}>CATEGORY4 - $600</h1>
            <div className={styles.questionContainer}>
              <h2>
                This React tool is used to share state and other important
                information without the use of "prop drilling".
              </h2>
            </div>
            <p className={styles.timer}>X seconds remaining...</p>
            <form method="post" className={styles.answerForm}>
              <input id="answer" placeholder="Enter answer here..." />
              <button type="submit" onClick={handleSubmit}>
                Submit
              </button>
            </form>
          </m.div>
        )}
      </AnimatePresence>
    </PageContainer>
  );
}
