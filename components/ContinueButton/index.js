import Link from "next/link";
import styles from "./styles.module.css";

const ContinueButton = ({ href }) => {
  return (
    <Link href={href} className={styles.button}>
      Continue
    </Link>
  );
};

export default ContinueButton;
