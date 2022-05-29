const { Pool } = require("pg")
// Coloca aquí tus credenciales
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "petClinic",
  password: "Acoco",
  port: 5432,
});
pool.connect()
module.exports = pool;