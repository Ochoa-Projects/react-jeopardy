import styles from "./styles.module.css";
import IncorrectGraphic from "../IncorrectGraphic";

const QuestionText = ({ question, correct }) => {
  return (
    <div className={styles.questionContainer}>
      {correct === false && <IncorrectGraphic />}
      <h2>{question}</h2>
    </div>
  );
};

export default QuestionText;
