
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
     * @return {Book}
     */
    get(id){

        return book;
    }


    /**
     *
     *@return {Promise <Book[]>}
     */
    all(){

    }

}

module.exports = BookRepository;
