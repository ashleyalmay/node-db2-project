// Update with your config settings.

module.exports = {
    development: {
      client: "sqlite3",
      connection: {
        filename: "./data/produce.db3", // changes the name of file 
      },
      useNullAsDefault: true, // needed for SQLite
      migrations: {
        directory: "./data/migrations",
      },
    
    },
  
    production: {
      client: "postgresql",
      connection: {
        database: "my_db",
        user: "username",
        password: "password",
      },
      pool: {
        min: 2,
        max: 10,
      },
      migrations: {
        tableName: "knex_migrations",
      },
    },
  };
  