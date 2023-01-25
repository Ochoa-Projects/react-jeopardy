import PageContainer from "../../components/PageContainer";
import ValueBoard from "../../components/ValueBoard";
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
        <h1>SINGLE JEOPARDY</h1>
        <div className={styles.playerScores}>
          <div>Player1: $$$</div>
          <div>Player2: $$$</div>
          <div>Player3: $$$</div>
        </div>
        <div className={styles.menuButton}>&#9776;</div>
      </div>
      <div className={styles.categoryRow}>
        {mockCategories.map((category) => (
          <div key={category} className={styles.categoryContainer}>
            {category}
          </div>
        ))}
      </div>
      <ValueBoard />
    </PageContainer>
  );
}
