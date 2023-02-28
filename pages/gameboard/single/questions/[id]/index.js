import { useEffect } from "react";
import Question from "../../../../../components/Question";
import { useGame } from "../../../../../context/GameContext";
import PageContainer from "../../../../../components/PageContainer";
import Loading from "../../../../../components/Loading";
import getQuestion from "../../../../../utils/getQuestion";

export default function SingleQuestion({ questionResponse }) {
  const { selectedDifficulty, singleCategories } = useGame();

  useEffect(() => {
    if (!singleCategories.length) {
      window.location.href = "/";
    }

    window.onbeforeunload = () => true;
    history.pushState(null, null, window.location.href);
    window.onpopstate = () => {
      alert("Cannot use back button on question pages. You lose!");
      router.push("/gameboard");
    };
  }, []);

  if (!singleCategories.length) {
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
