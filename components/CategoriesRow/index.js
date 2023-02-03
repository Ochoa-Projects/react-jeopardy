import styles from "./styles.module.css";

const CatergoriesRow = ({ categories }) => {
  return (
    <div className={styles.categoryRow}>
      {categories.map((category) => (
        <div key={category} className={styles.categoryContainer}>
          {category}
        </div>
      ))}
    </div>
  );
};

export default CatergoriesRow;
