// Update with your config settings.
require('dotenv').config();
module.exports = {

  development: {
      client    : 'mysql',
      connection: {
          host     : process.env.MYSQL_DB_HOST ,
          user     : process.env.MYSQL_DB_USER ,
          password : process.env.MYSQL_DB_PASS ,
          database : process.env.MYSQL_DB_NAME
      }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
