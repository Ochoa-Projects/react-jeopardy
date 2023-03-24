import { useEffect } from "react";
import { useRouter } from "next/router";
import PageContainer from "../../../components/PageContainer";
import Loading from "../../../components/Loading";
import { useGame } from "../../../context/GameContext";
import Gameboard from "../../../components/Gameboard";
import handleGameboardNav from "../../../utils/handleGameboardNav";

export default function DoubleGameboard() {
  const { doubleCategories } = useGame();
  const router = useRouter();

  useEffect(() => handleGameboardNav(doubleCategories, router), []);

  if (!doubleCategories.length) {
    return <Loading />;
  }

  return (
    <PageContainer>
      <Gameboard />
    </PageContainer>
  );
}
