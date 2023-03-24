import { useEffect } from "react";
import { useRouter } from "next/router";
import { useGame } from "../../../../../context/GameContext";
import PageContainer from "../../../../../components/PageContainer";
import Loading from "../../../../../components/Loading";
import getQuestion from "../../../../../utils/getQuestion";
import FinalQuestion from "../../../../../components/FinalQuestion";
import handleQuestionNav from "../../../../../utils/handleQuestionNav";

export default function FinalQuestionPage({ questionResponse, value }) {
  const { selectedDifficulty, finalCategory } = useGame();
  const router = useRouter();

  useEffect(() => handleQuestionNav("final", finalCategory, router), []);

  if (!doubleCategories.length) {
    return <Loading />;
  }

  return (
    <PageContainer>
      <FinalQuestion
        questionResponse={questionResponse}
        value={value}
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
