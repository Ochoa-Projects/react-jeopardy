import styles from "./styles.module.css";

const QuestionText = ({ question }) => {
  return (
    <div className={styles.questionContainer}>
      <h2>{question}</h2>
    </div>
  );
};

export default QuestionText;
