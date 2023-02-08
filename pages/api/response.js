import { getKnex } from "../../knex/knexcache.js";

export default async function handler(req, res) {
  const knex = getKnex();
  const response = await knex("react-questions");
  res.status(200).json(response);
}
