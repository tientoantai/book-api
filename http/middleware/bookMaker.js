const Book = require('../../src/book/book');

module.exports = function(req, res, next){
    let book = new Book(req.body.title, req.body.author);
    book.setPrice(req.body.price);
    book.setPublisher(req.body.publisher);
    if ( ! ! req.body.id){
        book.setId(req.body.id);
    }
    req.book = book;
    next();
};