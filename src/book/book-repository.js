
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

    }

    /**
     *
     * @param {int} id
     * @return {Promise <void>}
     */
    remove(id) {

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