import Link from "next/link";
import styles from "./styles.module.css";

const ValueCard = ({ i, j, question }) => {
  return (
    <div
      className={styles.valueBoardItem}
      style={{ gridColumn: i + 1, gridRow: j + 1 }}
      key={question}
    >
      <Link href="/gameboard/questions/1">${(j + 1) * 200}</Link>
    </div>
  );
};

export default ValueCard;
