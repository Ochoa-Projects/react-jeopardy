import { useRouter } from "next/router";
import { useGame } from "../../../context/GameContext";
import PageContainer from "../../../components/PageContainer";
import { useEffect } from "react";
import FinalBid from "../../../components/FinalBid";

const FinalGameboard = () => {
  const { finalSlug } = useGame();
  const router = useRouter();

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
      <FinalBid />
    </PageContainer>
  );
};

export default FinalGameboard;
