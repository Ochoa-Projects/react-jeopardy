const randomizeCategories = (response) => {
  const categories = response.map((item) => item.category);
  const shuffledCategories = categories.sort(() => 0.5 - Math.random());
  const singleCategories = shuffledCategories.slice(0, 5);
  const doubleCategories = shuffledCategories.slice(6, 11);

  return [singleCategories, doubleCategories];
};

export default randomizeCategories;
