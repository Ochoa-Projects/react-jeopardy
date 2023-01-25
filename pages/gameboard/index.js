import PageContainer from "../../components/PageContainer";
import styles from "./styles.module.css";

export default function Gameboard() {
  const mockCategories = [
    "Category1",
    "Category2",
    "Category3",
    "Category4",
    "Category5",
  ];

  return (
    <PageContainer>
      <div className={styles.topRow}>
        <h1>Single Jeopardy</h1>
        <div className={styles.playerScores}>Player1: Player2: Player3:</div>
        <div className={styles.menuButton}>&#9776;</div>
      </div>
      <div className={styles.categoryRow}>
        {mockCategories.map((category) => (
          <div key={category} className={styles.categoryContainer}>
            {category}
          </div>
        ))}
      </div>
      <div className={styles.valueGrid}>{}</div>
    </PageContainer>
  );
}
