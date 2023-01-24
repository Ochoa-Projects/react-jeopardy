import styles from "./styles.module.css";

const PageContainer = ({ children }) => {
  return <div className={styles.pageContainer}>{children}</div>;
};

export default PageContainer;
