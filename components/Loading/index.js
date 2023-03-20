import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import styles from "./styles.module.css";

const Loading = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) => url === router.asPath && setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return (
    loading && (
      <div className={styles.loaderContainer}>
        <div className={styles.loader}>
          <ReactLoading
            type={"bars"}
            color={"#e2e200"}
            height={"50%"}
            width={"50%"}
          />
        </div>
      </div>
    )
  );
};

export default Loading;
