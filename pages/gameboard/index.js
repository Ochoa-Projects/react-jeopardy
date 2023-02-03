import Link from "next/link";
import PageContainer from "../../components/PageContainer";
import PlayerScores from "../../components/PlayerScores";
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
        <PlayerScores />
        <Link href="/" className={styles.menuButton}>
          &#9776;
        </Link>
      </div>
      <div className={styles.gameboardBorder}>
        <div className={styles.categoryRow}>
          {mockCategories.map((category) => (
            <div key={category} className={styles.categoryContainer}>
              {category}
            </div>
          ))}
        </div>
        <ValueBoard />
      </div>
    </PageContainer>
  );
}
