import styles from "./styles.module.css";

const AnswerSubmission = ({ handleSubmit, correct }) => {
  return (
    <div method="post" className={styles.answerForm}>
      <input id="answer" placeholder="Enter answer here..." />
      <button
        onClick={handleSubmit}
        disabled={correct === true || correct === false}
      >
        Submit
      </button>
    </div>
  );
};

export default AnswerSubmission;
