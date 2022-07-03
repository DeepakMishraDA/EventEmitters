const createConnectionPool = require('@databases/pg');
require('dotenv').config();

async function carryOutQuery({ queryString, schema }) {
  let db = null;
  try {
    db = createConnectionPool({
      connectionString: process.env.POSTGRES_URL,
      schema: schema,
      bigIntMode: 'bigint',
    });
    const result = await db.query(queryString);
    await db.dispose();
    return result;
  } catch (error) {
    console.log(error);
    if (db) {
      await db.dispose();
    }
    return;
  }
}

module.exports = carryOutQuery;
