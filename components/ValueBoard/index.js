import styles from "./styles.module.css";

const ValueBoard = () => {
  const mockQuestions = {
    cat1: ["col1row1", "col1row2", "col1row3", "col1row4", "col1row5"],
    cat2: ["col2row1", "col2row2", "col2row3", "col2row4", "col2row5"],
    cat3: ["col3row1", "col3row2", "col3row3", "col3row4", "col3row5"],
    cat4: ["col4row1", "col4row2", "col4row3", "col4row4", "col4row5"],
    cat5: ["col5row1", "col5row2", "col5row3", "col5row4", "col5row5"],
  };

  return (
    <div className={styles.valueGrid}>
      {Object.keys(mockQuestions).map((key, i) =>
        mockQuestions[key].map((question, j) => (
          <div style={{ gridColumn: i + 1, gridRow: j + 1 }} key={question}>
            {(j + 1) * 200}
          </div>
        ))
      )}
    </div>
  );
};
export default ValueBoard;
