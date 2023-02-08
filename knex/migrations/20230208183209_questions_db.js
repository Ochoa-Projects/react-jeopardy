/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("questions", (table) => {
    table.increments("question_id");
    table.text("category").notNullable();
    table.json("answer").notNullable();
    table.text("question").notNullable();
    table.uuid("question_slug");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("questions");
};
