import createBoard from "../../utils/createBoard";
import styles from "./styles.module.css";

const ValueBoard = () => {
  const board = createBoard();
  return <div className={styles.valueGrid}>{board}</div>;
};
export default ValueBoard;
