import { useRouter } from "next/router";
import styles from "./styles.module.css";

const ValueCard = ({ i, j, setAttempted }) => {
  const router = useRouter();
  const handleClick = () => {
    setAttempted((prev) => ({ valueCards: [...prev.valueCards, `${i}${j}`] }));
    router.push("/gameboard/questions/1");
  };

  return (
    <div
      className={styles.valueBoardItem}
      style={{ gridColumn: i + 1, gridRow: j + 1 }}
    >
      <div onClick={handleClick}>${(j + 1) * 200}</div>
    </div>
  );
};

export default ValueCard;
