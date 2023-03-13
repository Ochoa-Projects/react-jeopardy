import Link from "next/link";
import styles from "./styles.module.css";

const ResultsButton = ({ href, text }) => {
  return (
    <Link href={href} className={styles.button}>
      {text}
    </Link>
  );
};

export default ResultsButton;
