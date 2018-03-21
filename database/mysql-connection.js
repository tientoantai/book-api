
const connection = require('knex')({
    client    : 'mysql',
    connection: {
        host     : process.env.MYSQL_DB_HOST ,
        user     : process.env.MYSQL_DB_USER ,
        password : process.env.MYSQL_DB_PASS ,
        database : process.env.MYSQL_DB_NAME
    }
});

module.exports = connection;
