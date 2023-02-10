/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  let uuidGenerationRaw = `(lower(hex(randomblob(4))) || '-' || lower(hex(randomblob(2))) || '-4' || substr(lower(hex(randomblob(2))),2) || '-' || substr('89ab',abs(random()) % 4 + 1, 1) || substr(lower(hex(randomblob(2))),2) || '-' || lower(hex(randomblob(6))))`;

  return knex.schema.createTable("questions", (table) => {
    table.increments("question_id");
    table.text("category").notNullable();
    table.json("answer").notNullable();
    table.text("question").notNullable();
    table.uuid("question_slug").defaultTo(knex.raw(uuidGenerationRaw));
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("questions");
};
