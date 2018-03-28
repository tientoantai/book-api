const Book = require('./book');
class BookRepository{

    /**
     *
     * @param connection
     */
    constructor(connection, factory) {
        this.connection = connection;
        this.factory    = factory;
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
                publisher    : book.getPublisher(),
                price        : book.getPrice()
            }).where({id : book.getId()})
            :
            this.connection('books').insert({
                title        : book.getTitle(),
                author       : book.getAuthor(),
                publisher    : book.getPublisher(),
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
            deleted_at : new Date().getTime().toString()
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
        return this.connection('books').select('id', 'title', 'author', 'publisher', 'price', 'thumbnail', 'description')
            .where({'id': id,'books.deleted_at': null}).limit(1)
            .then((booksRaw) => {
                let bookRaw = booksRaw.shift();
                return this.factory.make(bookRaw);
            });
    }


    /**
     *
     *@return {Promise <Book[]>}
     */
    all(){
        return this.connection('books').select('id', 'title', 'author', 'publisher', 'price', 'thumbnail', 'description')
            .where({'books.deleted_at': null})
            .then((booksRaw) => booksRaw.map(bookRaw => {
                return this.factory.make(bookRaw)
            }));
    }

}

module.exports = BookRepository;
