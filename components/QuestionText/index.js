import styles from "./styles.module.css";

const QuestionText = () => {
  return (
    <div className={styles.questionContainer}>
      <h2>
        This React tool is used to share state and other important information
        without the use of "prop drilling".
      </h2>
    </div>
  );
};

export default QuestionText;
