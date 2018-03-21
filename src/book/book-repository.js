const Book = require('./book');
class BookRepository{

    /**
     *
     * @param connection
     */
    constructor(connection) {
        this.connection = connection;
    }

    /**
     *
     * @param {Book} book
     * @return {Promise <void>}
     */
    save(book) {
        return book.getId() ?
            this.connection('books').update({
                title        : book.getTitle(),
                author       : book.getAuthor(),
                publisher_id : book.getPublisher(),
                price        : book.getPrice()
            }).where({id : book.getId()}) :

            this.connection('books').insert({
                title        : book.getTitle(),
                author       : book.getAuthor(),
                publisher_id : book.getPublisher(),
                price        : book.getPrice()
            }).then(insertedIds => {
                book.setId(insertedIds[0]);
                return book
            });
    }

    /**
     *
     * @param {int} id
     * @return {Promise <void>}
     */
    remove(id) {
        return this.connection('books').update({
            deleted_at : new Date().getTime()
        }).where({
            id : id
        });
    }

    /**
     *
     * @param {int}id
     * @return {Promise<Book>}
     */
    get(id){
        return this.connection('books').select('id', 'title', 'author', 'publisher', 'price')
            .where({'books.deleted_at': null}).limit(1)
            .then((booksRaw) => {
                let bookRaw = booksRaw.shift();
                let book = new Book(bookRaw.title, bookRaw.author);
                book.setId(bookRaw.id);
                book.setPublisher(bookRaw.publisher);
                book.setPrice(bookRaw.price);
                return book
            });
    }


    /**
     *
     *@return {Promise <Book[]>}
     */
    all(){

    }

}

module.exports = BookRepository;
