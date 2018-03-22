const Book = require('./book');

class BookFactory{

    /**
     *
     * @param {Object}bookRaw
     * @return {Book}
     */
    make(bookRaw){
        let book = new Book(bookRaw.title, bookRaw.author);
        book.setPublisher(bookRaw.publisher);
        book.setPrice(bookRaw.price);
        if ( ! ! bookRaw.id){
            book.setId(bookRaw.id);
        }
        return book;
    }

}

module.exports = BookFactory;