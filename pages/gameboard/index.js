import Link from "next/link";

import { getKnex } from "../../knex/knexcache.js";
import { motion as m } from "framer-motion";
import PageContainer from "../../components/PageContainer";
import PlayerScores from "../../components/PlayerScores";
import CatergoriesRow from "../../components/CategoriesRow";
import ValueBoard from "../../components/ValueBoard";
import styles from "./styles.module.css";

export default function Gameboard({ categories }) {
  console.log(categories);
  const mockCategories = [
    "Category1",
    "Category2",
    "Category3",
    "Category4",
    "Category5",
  ];

  return (
    <PageContainer>
      <m.div
        className={styles.topRow}
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ ease: "backOut", duration: 0.4 }}
      >
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
        transition={{ delay: 0.4, ease: "backOut", duration: 0.6 }}
      >
        <CatergoriesRow categories={mockCategories} />
        <ValueBoard />
      </m.div>
    </PageContainer>
  );
}

export async function getServerSideProps() {
  const knex = getKnex();
  const response = await knex("questions").distinct("category");
  const categories = response.map((item) => item.category);
  return { props: { categories } };
}
