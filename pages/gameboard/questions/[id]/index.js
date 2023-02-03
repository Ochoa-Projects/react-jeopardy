import PageContainer from "../../../../components/PageContainer";
import styles from "./styles.module.css";

export default function Question() {
  return (
    <PageContainer color="var(--light-blue-gradient)">
      <h1 className={styles.questionHeading}>CATEGORY4 - $600</h1>
      <div className={styles.questionContainer}>
        <h2>
          This React tool is used to share state and other important information
          without the use of "prop drilling".
        </h2>
      </div>
      <p className={styles.timer}>X seconds remaining...</p>
      <form method="post" action="/gameboard" className={styles.answerForm}>
        <input id="answer" placeholder="Enter answer here..." />
        <button type="submit">Submit</button>
      </form>
    </PageContainer>
  );
}
