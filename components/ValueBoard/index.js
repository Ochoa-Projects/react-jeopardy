import styles from "./styles.module.css";

const ValueBoard = () => {
  const valueCheck = (ind) => {
    if (ind < 5) {
      return <div key={ind}>200</div>;
    } else if (ind < 10) {
      return <div key={ind}>400</div>;
    } else if (ind < 15) {
      return <div key={ind}>600</div>;
    } else if (ind < 20) {
      return <div key={ind}>800</div>;
    } else {
      return <div key={ind}>1000</div>;
    }
  };

  return (
    <div className={styles.valueGrid}>
      {Array.from({ length: 25 }, (_, index) => valueCheck(index))}
    </div>
  );
};

export default ValueBoard;
