const addToComputerScore = (value, setPlayerScores) => {
  const playerNumber = Math.floor(Math.random() * 2 + 2);

  setPlayerScores((prev) => ({
    ...prev,
    [`player${playerNumber}`]: {
      ...prev[`player${playerNumber}`],
      score: prev[`player${playerNumber}`].score + Number(value),
    },
  }));
};

export default addToComputerScore;
