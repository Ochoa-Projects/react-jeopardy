import styles from "./styles.module.css";
import PageContainer from "../PageContainer";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <PageContainer>
      <ReactLoading color={"#ffffff"} height={"20%"} width={"20%"} />
    </PageContainer>
  );
};

export default Loading;
