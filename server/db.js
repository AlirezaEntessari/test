const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "rootroot",
    host: "database-test1.c5qao8u6wxjb.us-east-2.rds.amazonaws.com",
    port: 5432,
    database: "test_database"
})

module.exports = pool;