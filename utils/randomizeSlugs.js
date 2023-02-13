import { getKnex } from "../knex/knexcache";

const randomizeSlugs = async (categories) => {
  const knex = getKnex();
  const slugs = {};

  for (let i = 0; i < categories.length; i++) {
    const slugResponse = await knex("questions")
      .where("category", categories[i])
      .select("question_slug");
    slugs[categories[i]] = slugResponse
      .map((slug) => slug.question_slug)
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);
  }

  return slugs;
};

export default randomizeSlugs;
