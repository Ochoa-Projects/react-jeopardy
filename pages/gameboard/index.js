import Link from "next/link";
import { motion as m } from "framer-motion";
import PageContainer from "../../components/PageContainer";
import PlayerScores from "../../components/PlayerScores";
import CatergoriesRow from "../../components/CategoriesRow";
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
      <m.div className={styles.topRow} initial={{ y: -250 }} animate={{ y: 0 }}>
        <h1>SINGLE JEOPARDY</h1>
        <PlayerScores />
        <Link href="/" className={styles.menuButton}>
          &#9776;
        </Link>
      </m.div>
      <m.div
        className={styles.gameboardBorder}
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: 0.4 }}
      >
        <CatergoriesRow categories={mockCategories} />
        <ValueBoard />
      </m.div>
    </PageContainer>
  );
}
