const getTimerDuration = (selectedDifficulty) => {
  if (selectedDifficulty === "Easy") {
    return 20;
  } else if (selectedDifficulty === "Normal") {
    return 3;
  } else {
    return 10;
  }
};

export default getTimerDuration;
