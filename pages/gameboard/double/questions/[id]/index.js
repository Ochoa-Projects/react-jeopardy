import { useEffect } from "react";
import { useRouter } from "next/router";
import { useGame } from "../../../../../context/GameContext";
import Question from "../../../../../components/Question";
import DailyDoubleQuestion from "../../../../../components/DailyDoubleQuestion";
import PageContainer from "../../../../../components/PageContainer";
import Loading from "../../../../../components/Loading";
import getQuestion from "../../../../../utils/getQuestion";
import handleGameFlowNav from "../../../../../utils/handleGameFlowNav";

export default function DoubleQuestion({ questionResponse, value }) {
  const { selectedDifficulty, doubleCategories } = useGame();
  const router = useRouter();

  useEffect(() => handleGameFlowNav("double", doubleCategories, router), []);

  if (!doubleCategories.length) {
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
