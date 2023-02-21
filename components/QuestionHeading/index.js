import styles from "./styles.module.css";

const QuestionHeading = ({ category, value }) => {
  return (
    <h1 className={styles.questionHeading}>
      {category} - ${value}
    </h1>
  );
};

export default QuestionHeading;
