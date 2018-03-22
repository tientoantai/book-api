const Book = require('../../src/book/book');

module.exports = function(req, res, next){
    req.book = req.app.get('book.factory').make(req.body);
    next();
};