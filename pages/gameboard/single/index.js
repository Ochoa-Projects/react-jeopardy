import { useEffect } from "react";
import { useRouter } from "next/router";
import PageContainer from "../../../components/PageContainer";
import Loading from "../../../components/Loading";
import { useGame } from "../../../context/GameContext";
import Gameboard from "../../../components/Gameboard";
import handleGameboardNav from "../../../utils/handleGameboardNav";

export default function SingleGameboard() {
  const { singleCategories } = useGame();
  const router = useRouter();

  useEffect(() => handleGameboardNav(singleCategories, router), []);

  if (!singleCategories.length) {
    return <Loading />;
  }

  return (
    <PageContainer>
      <Gameboard />
    </PageContainer>
  );
}
