require('dotenv').config();
const knex                   = require('./database/mysql-connection');
const BookRepository         = require('./src/book/book-repository');
const Book                   = require('./src/book/book');

let bookRepo = new BookRepository(knex);

let book      = new Book("abc", 'abc');

book.setPublisher('abc');
book.setPrice(10);
bookRepo.get(1).then(function (results) {
    console.log(results);
});
bookRepo.all().then(function (results) {
    console.log(results);
});