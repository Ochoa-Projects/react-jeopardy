const randomizeComputerFinalBid = (playerScores, setPlayerScores) => {
  for (const player of Object.keys(playerScores)) {
    if (player === "player1") continue;

    if (playerScores[player].score > 0) {
      const computerBid = Math.floor(
        Math.random() * playerScores[player].score + 1
      );

      const computerSetBid = Math.random() > 0.5 ? computerBid : -computerBid;

      setPlayerScores((prev) => ({
        ...prev,
        [player]: {
          ...prev[player],
          score: prev[player].score + computerSetBid,
        },
      }));
    }
  }
};

export default randomizeComputerFinalBid;
