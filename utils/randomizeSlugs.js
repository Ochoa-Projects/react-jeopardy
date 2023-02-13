import { getKnex } from "../knex/knexcache";

const randomizeSlugs = async (categories) => {
  const knex = getKnex();
  const slugs = {};

  for (let i = 0; i < categories.length; i++) {
    const slugResponse = await knex("questions")
      .where("category", categories[i])
      .select("question_slug");
    const categorySlugs = slugResponse.map((slug) => slug.question_slug);
    const shuffledSlugs = categorySlugs.sort(() => 0.5 - Math.random());
    slugs[categories[i]] = shuffledSlugs.slice(0, 5);
  }

  return slugs;
};

export default randomizeSlugs;
