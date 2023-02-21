import { getKnex } from "../knex/knexcache";

const randomizeCategories = async () => {
  const knex = getKnex();

  const categoriesResponse = await knex("questions")
    .distinct("category")
    .pluck("category");
  const shuffledCategories = categoriesResponse.sort(() => 0.5 - Math.random());
  const singleCategories = shuffledCategories.slice(0, 5);
  const doubleCategories = shuffledCategories.slice(5, 12);

  return [singleCategories, doubleCategories];
};

export default randomizeCategories;
