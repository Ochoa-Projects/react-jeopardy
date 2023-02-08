const { loadEnvConfig } = require("@next/env");

const dev = process.env.NODE_ENV !== "production";
const { DB_ENVIRONMENT } = loadEnvConfig("./", dev).combinedEnv;

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/questions.sqlite3",
    },
    migrations: {
      directory: "./knex/migrations",
    },
    seeds: {
      directory: "./knex/seeds",
    },
    useNullAsDefault: true,
  },
  production: {
    client: "pg",
    connection: DB_ENVIRONMENT,
  },
};
