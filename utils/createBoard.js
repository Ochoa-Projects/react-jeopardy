import ValueCard from "../components/ValueCard";

const createBoard = () => {
  let board = [];
  for (let i = 0; i < 5; i++) {
    let category = [];
    for (let j = 0; j < 5; j++) {
      category.push(<ValueCard key={`${i}${j}`} i={i} j={j} />);
    }
    board.push(category);
  }
  return board;
};

export default createBoard;
