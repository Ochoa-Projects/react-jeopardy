import { useRouter } from "next/router";
import { useGame } from "../../../context/GameContext";
import PageContainer from "../../../components/PageContainer";
import { useEffect } from "react";
import FinalBid from "../../../components/FinalBid";
import FinalMissed from "../../../components/FinalMissed";
import handleGameboardNav from "../../../utils/handleGameboardNav";

const FinalGameboard = () => {
  const { finalSlug, playerScores } = useGame();
  const router = useRouter();

  const playerScore = playerScores.player1.score;

  useEffect(() => handleGameboardNav(finalSlug, router), []);

  return (
    <PageContainer>
      {playerScore <= 0 ? <FinalMissed /> : <FinalBid />}
    </PageContainer>
  );
};

export default FinalGameboard;
