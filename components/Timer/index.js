import { useState, useEffect } from "react";

import styles from "./styles.module.css";

const Timer = ({ seconds }) => {
  return <div className={styles.timer}>{`${seconds} seconds remaining`}</div>;
};

export default Timer;
