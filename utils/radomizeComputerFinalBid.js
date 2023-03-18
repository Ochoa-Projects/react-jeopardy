const randomizeComputerFinalBid = (player2Score, player3Score) => {
  // Randomize player bids
  const player2Bid = Math.floor(Math.random() * (player2Score - 1 + 1) + 1);
  const player3Bid = Math.floor(Math.random() * (player3Score - 1 + 1) + 1);

  // Randomize correctness

  // Add or Subtract player scores based on correctness
};

export default randomizeComputerFinalBid;
