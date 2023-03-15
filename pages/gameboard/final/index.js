import { useRouter } from "next/router";
import { useGame } from "../../../context/GameContext";
import PageContainer from "../../../components/PageContainer";
import { useEffect } from "react";
import FinalBid from "../../../components/FinalBid";
import FinalMissed from "../../../components/FinalMissed";

const FinalGameboard = () => {
  const { finalSlug, playerScores } = useGame();
  const router = useRouter();

  const playerScore = playerScores.player1.score;

  useEffect(() => {
    if (!finalSlug) {
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

  return (
    <PageContainer>
      {playerScore <= 0 ? <FinalMissed /> : <FinalBid />}
    </PageContainer>
  );
};

export default FinalGameboard;
