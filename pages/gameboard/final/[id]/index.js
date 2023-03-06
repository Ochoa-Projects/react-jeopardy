import { useEffect } from "react";
import { useRouter } from "next/router";
import { useGame } from "../../../../../context/GameContext";
import Question from "../../../../../components/Question";
import DailyDoubleQuestion from "../../../../../components/DailyDoubleQuestion";
import PageContainer from "../../../../../components/PageContainer";
import Loading from "../../../../../components/Loading";
import getQuestion from "../../../../../utils/getQuestion";

export default function FinalQuestion() {
  const { selectedDifficulty, doubleCategories } = useGame();
  const router = useRouter();

  useEffect(() => {
    if (!doubleCategories.length) {
      window.location.href = "/";
    }

    window.onbeforeunload = () => true;
    history.pushState(null, null, window.location.href);
    window.onpopstate = () => {
      alert("Cannot use back button on question pages. You lose!");
      router.push("/gameboard/double");
    };
  }, []);

  if (!doubleCategories.length) {
    return <Loading />;
  }

  return (
    <PageContainer>
      <></>
    </PageContainer>
  );
}
