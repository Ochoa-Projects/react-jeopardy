import { getKnex } from "../knex/knexcache";

const getQuestion = async (id) => {
  const knex = getKnex();
  const [question] = await knex("questions").where("question_slug", id);
  return question;
};

export default getQuestion;
