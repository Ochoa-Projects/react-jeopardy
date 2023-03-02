import { getKnex } from "../knex/knexcache";

const randomizeSlugs = async (categories) => {
  const knex = getKnex();
  const randomCategory = Math.ceil(Math.random() * 5) - 1;
  const randomQuestion = Math.ceil(Math.random() * 5) - 1;

  const slugs = {};
  for (let i = 0; i < categories.length; i++) {
    const slugResponse = await knex("questions")
      .where("category", categories[i])
      .select("question_slug")
      .pluck("question_slug");
    const shuffledSlugs = slugResponse.sort(() => 0.5 - Math.random());
    const dailyDoubledSlugs = shuffledSlugs.map((slug, index) => ({
      slug,
      isDailyDouble:
        randomCategory === i && randomQuestion === index ? true : false,
    }));
    slugs[categories[i]] = dailyDoubledSlugs.slice(0, 5);
  }
  return slugs;
};

export default randomizeSlugs;
