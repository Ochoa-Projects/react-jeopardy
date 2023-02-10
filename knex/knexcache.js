import knex from "knex";
import knexfile from "../knexfile.js";

let cached = global.pg;

let config =
  process.env.NODE_ENV !== "production"
    ? knexfile.development
    : knexfile.production;

if (!cached) {
  cached = global.pg = {};
}

export function getKnex() {
  if (!cached.instance) {
    cached.instance = knex(config);
  }
  return cached.instance;
}
