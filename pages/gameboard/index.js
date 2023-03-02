import { useEffect } from "react";
import { useRouter } from "next/router";
import PageContainer from "../../components/PageContainer";
import Loading from "../../components/Loading";
import { useGame } from "../../context/GameContext";
import Gameboard from "../../components/Gameboard";

export default function GameboardPage() {
  const { singleCategories, doubleCategories, gameStage } = useGame();
  const router = useRouter();

  const categories =
    gameStage === "single" ? singleCategories : doubleCategories;

  useEffect(() => {
    if (!categories.length) {
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

  if (!categories.length) {
    return <Loading />;
  }

  return (
    <PageContainer>
      <Gameboard />
    </PageContainer>
  );
}
