import styles from "./styles.module.css";

const CorrectAnswer = ({ answer }) => {
  console.log(answer);
  return (
    <div className={styles.answerContainer}>
      <span className={styles.text}>Correct Answer:</span>
      <span className={styles.answer}>{answer}</span>
    </div>
  );
};

export default CorrectAnswer;
