const randomizeComputerFinalBid = (player2Score, player3Score) => {
  console.log("player2Score", player2Score);
  console.log("player3Score", player3Score);

  // Randomize player bids
  const player2Bid = Math.floor(Math.random() * player2Score + 1);
  const player3Bid = Math.floor(Math.random() * player3Score + 1);

  console.log("player2Bid", player2Bid);
  console.log("player3Bid", player3Bid);

  // Randomize player bid to positive or negative
  const player2SetBid = Math.random() > 0.5 ? player2Bid : -player2Bid;
  const player3SetBid = Math.random() > 0.5 ? player3Bid : -player3Bid;

  console.log("player2SetBid", player2SetBid);
  console.log("player3SetBid", player3SetBid);

  // Add or Subtract player scores based on correctness
};

export default randomizeComputerFinalBid;
