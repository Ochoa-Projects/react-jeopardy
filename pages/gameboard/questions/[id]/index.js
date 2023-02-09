import { motion as m } from "framer-motion";
import PageContainer from "../../../../components/PageContainer";
import styles from "./styles.module.css";

export default function Question() {
  return (
    <PageContainer>
      <m.div
        className={styles.container}
        initial={{ rotateY: 180, scale: 0.2 }}
        animate={{ rotateY: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className={styles.questionHeading}>CATEGORY4 - $600</h1>
        <div className={styles.questionContainer}>
          <h2>
            This React tool is used to share state and other important
            information without the use of "prop drilling".
          </h2>
        </div>
        <p className={styles.timer}>X seconds remaining...</p>
        <form method="post" action="/gameboard" className={styles.answerForm}>
          <input id="answer" placeholder="Enter answer here..." />
          <button type="submit">Submit</button>
        </form>
      </m.div>
    </PageContainer>
  );
}
