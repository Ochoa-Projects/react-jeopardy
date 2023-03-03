import styles from "./styles.module.css";

const QuestionHeading = ({ category, value }) => {
  return (
    <h1 className={styles.questionHeading}>
      {value === "Daily Double"
        ? `${category} - ${value}`
        : `${category} - $${value}`}
    </h1>
  );
};

export default QuestionHeading;
