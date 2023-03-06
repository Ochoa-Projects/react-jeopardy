import { getKnex } from "../knex/knexcache";

const getFinalSlug = async (category) => {
  const knex = getKnex();
  const slugResponse = await knex("questions")
    .where("category", category)
    .select("question_slug")
    .pluck("question_slug");
  const shuffledSlugs = slugResponse.sort(() => 0.5 - Math.random());
  return shuffledSlugs[0];
};

export default getFinalSlug;
