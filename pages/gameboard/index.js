import PageContainer from "../../components/PageContainer";
import styles from "./styles.module.css";

export default function Gameboard() {
  const mockCategories = [];

  return (
    <PageContainer>
      <div className={styles.topRow}>Top Row</div>
      <div className={styles.categoryRow}>Categories</div>
      <div className={styles.valueGrid}>Value Grid</div>
    </PageContainer>
  );
}
