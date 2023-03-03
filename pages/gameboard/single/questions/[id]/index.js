import { useEffect } from "react";
import { useRouter } from "next/router";
import { useGame } from "../../../../../context/GameContext";
import Question from "../../../../../components/Question";
import PageContainer from "../../../../../components/PageContainer";
import Loading from "../../../../../components/Loading";
import getQuestion from "../../../../../utils/getQuestion";

export default function SingleQuestion({ questionResponse, value }) {
  const { selectedDifficulty, singleCategories } = useGame();
  const router = useRouter();

  console.log(value);

  useEffect(() => {
    if (!singleCategories.length) {
      window.location.href = "/";
    }

    window.onbeforeunload = () => true;
    history.pushState(null, null, window.location.href);
    window.onpopstate = () => {
      alert("Cannot use back button on question pages. You lose!");
      router.push("/gameboard/single");
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
  const { id, value } = context.query;
  const questionResponse = await getQuestion(id);

  return {
    props: { questionResponse, value },
  };
}
