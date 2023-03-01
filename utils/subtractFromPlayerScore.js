const subtractFromPlayerScore = (value, setPlayerScores) => {
  setPlayerScores((prev) => ({
    ...prev,
    player1: {
      ...prev.player1,
      score: prev.player1.score - Number(value),
    },
  }));
};

export default subtractFromPlayerScore;
