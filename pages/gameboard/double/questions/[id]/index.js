import { useEffect } from "react";
import { useGame } from "../../../../../context/GameContext";
import PageContainer from "../../../../../components/PageContainer";
import Loading from "../../../../../components/Loading";
import getQuestion from "../../../../../utils/getQuestion";
import Question from "../../../../../components/Question";

export default function DoubleQuestion({ questionResponse }) {
  const { selectedDifficulty, doubleCategories } = useGame();

  useEffect(() => {
    if (!doubleCategories.length) {
      window.location.href = "/";
    }

    window.onbeforeunload = () => true;
    history.pushState(null, null, window.location.href);
    window.onpopstate = () => {
      alert("Cannot use back button on question pages. You lose!");
      router.push("/gameboard");
    };
  }, []);

  if (!doubleCategories.length) {
    return <Loading />;
  }

  return (
    <PageContainer>
      <Question
        questionResponse={questionResponse}
        selectedDifficulty={selectedDifficulty}
      />
    </PageContainer>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const questionResponse = await getQuestion(id);

  return {
    props: { questionResponse },
  };
}
