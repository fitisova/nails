const knex = require("knex")({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : 'dkfljcgfxrfgjgbhjc',
      database : 'nails',
      insecureAuth : true
    }
  });

module.exports = knex;
