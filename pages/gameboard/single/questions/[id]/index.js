import { useEffect } from "react";
import { useGame } from "../../../../../context/GameContext";
import { useRouter } from "next/router";
import Question from "../../../../../components/Question";
import DailyDoubleQuestion from "../../../../../components/DailyDoubleQuestion";
import PageContainer from "../../../../../components/PageContainer";
import Loading from "../../../../../components/Loading";
import getQuestion from "../../../../../utils/getQuestion";
import handleQuestionNav from "../../../../../utils/handleQuestionNav";

export default function SingleQuestion({ questionResponse, value }) {
  const { selectedDifficulty, singleCategories } = useGame();
  const router = useRouter();

  useEffect(() => handleQuestionNav("single", singleCategories, router), []);

  if (!singleCategories.length) {
    return <Loading />;
  }

  return (
    <PageContainer>
      {value === "daily-double" ? (
        <DailyDoubleQuestion
          questionResponse={questionResponse}
          selectedDifficulty={selectedDifficulty}
        />
      ) : (
        <Question
          questionResponse={questionResponse}
          selectedDifficulty={selectedDifficulty}
        />
      )}
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
