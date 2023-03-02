import { useEffect } from "react";
import { useRouter } from "next/router";
import PageContainer from "../../../components/PageContainer";
import Loading from "../../../components/Loading";
import { useGame } from "../../../context/GameContext";
import Gameboard from "../../../components/Gameboard";

export default function SingleGameboard() {
  const { singleCategories } = useGame();
  const router = useRouter();

  useEffect(() => {
    if (!singleCategories.length) {
      window.location.href = "/";
    }

    window.onbeforeunload = () => true;
    history.pushState(null, null, window.location.href);
    window.onpopstate = () => {
      const leavePage = confirm(
        "This will end your progress. Are you sure you want to do this?"
      );
      if (leavePage) {
        router.push("/");
      } else {
        history.pushState(null, null, window.location.href);
      }
    };
  }, []);

  if (!singleCategories.length) {
    return <Loading />;
  }

  return (
    <PageContainer>
      <Gameboard />
    </PageContainer>
  );
}
