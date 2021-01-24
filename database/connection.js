var knex = require("knex")({
    client: "mysql2",
    connection: {
      host: "localhost",
      user: "root",
      //port: "3005",
      password: "",
      database: "fullstackgames",
    },
  });
  
  module.exports = knex;