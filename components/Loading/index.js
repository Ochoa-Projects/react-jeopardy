import PageContainer from "../PageContainer";
import ReactLoading from "react-loading";
import styles from "./styles.module.css";

const Loading = () => {
  return (
    <PageContainer>
      <div className={styles.loader}>
        <ReactLoading
          type={"bars"}
          color={"#e2e200"}
          height={"20%"}
          width={"20%"}
        />
      </div>
    </PageContainer>
  );
};

export default Loading;
