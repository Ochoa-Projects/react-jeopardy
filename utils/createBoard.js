import { useEffect } from "react";
import ValueCard from "../components/ValueCard";
import { useGame } from "../context/GameContext";

const createBoard = () => {
  const { singleSlugs, setSingleSlugs } = useGame();

  useEffect(() => {
    if (!singleSlugs.length) {
      let storage = JSON.parse(window.localStorage.getItem("STATE"));
      setSingleSlugs(storage.singleSlugs);
    }
  }, []);

  let board = [];
  for (let [i, [key]] of Object.entries(singleSlugs).entries()) {
    let category = [];
    const slugs = singleSlugs[key];
    for (let j = 0; j < 5; j++) {
      category.push(<ValueCard key={`${i}${j}`} i={i} j={j} slug={slugs[j]} />);
    }
    board.push(category);
  }

  return board;
};

export default createBoard;
