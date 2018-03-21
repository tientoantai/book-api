const Book = require('../../src/book/book');

module.exports = function(req, res, next){
    let book = new Book(req.body.title, req.body.author);
    book.setPrice(req.body.price);
    book.setPublisher(req.body.publisher);
    req.book = book;
    next();
};