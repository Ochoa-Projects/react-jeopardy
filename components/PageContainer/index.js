import styles from "./styles.module.css";

const PageContainer = ({ children, color = "--dark-blue" }) => {
  return (
    <div style={{ background: color }} className={styles.pageContainer}>
      {children}
    </div>
  );
};

export default PageContainer;
