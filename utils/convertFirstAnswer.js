const convertFirstAnswer = (stringAnswers) => {
  const answer = stringAnswers.slice(1, -1).split(",")[0];
  return answer;
};

export default convertFirstAnswer;
