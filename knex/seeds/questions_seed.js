const json = require("../../public/react-questions.json");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
  await knex("questions").del();
  await knex("questions").insert(json);
};
