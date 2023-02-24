const convertAnswers = (stringAnswer) => {
  const answers = stringAnswer.slice(1, -1).split(",");
  const formattedAnswers = answers.map((answer) => answer.toLowerCase());
  return formattedAnswers;
};

export default convertAnswers;
