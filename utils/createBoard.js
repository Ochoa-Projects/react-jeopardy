import ValueCard from "../components/ValueCard";
import { useGame } from "../context/GameContext";

const createBoard = () => {
  const { singleSlugs, doubleSlugs, gameStage } = useGame();
  const chosenSlugs = gameStage === "single" ? singleSlugs : doubleSlugs;

  let board = [];
  for (let [i, [key]] of Object.entries(chosenSlugs).entries()) {
    let category = [];
    const slugs = chosenSlugs[key];
    for (let j = 0; j < 5; j++) {
      category.push(
        <ValueCard key={`${i}${j}`} i={i} j={j} question={slugs[j]} />
      );
    }
    board.push(category);
  }
  return board;
};

export default createBoard;
