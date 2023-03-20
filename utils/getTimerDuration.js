const getTimerDuration = (selectedDifficulty) => {
  if (selectedDifficulty === "Easy") {
    return 20;
  } else if (selectedDifficulty === "Normal") {
    return 15;
  } else {
    return 10;
  }
};

export default getTimerDuration;
