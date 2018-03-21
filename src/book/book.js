
class Book{

    /**
     *
     *@constructor
     * @param title
     * @param author
     */
    constructor(title, author){
       this.title  = title;
       this.author = author ;
    }

    /**
     *
     * @return {String}
     */
    getTitle(){
       return this.title;
    }

    /**
     *
     * @return {String}
     */
    getAuthor(){
        return this.author;
    }

    getPublisher(){
        return this.publisher;
    }

    /**
     *
     * @return {float}
     */
    getPrice(){
        return this.price;
    }

    /**
     *
     * @return {int}
     */
    getId(){
        return this.id;
    }

    /**
     *
     * @param {String} title
     * @return self
     */
    setTitle(title){
        this.title = title;
        return this;
    }

    /**
     *
     * @param {String} author
     * @return self
     */
    setAuthor(author){
        this.author = author;
        return this;
    }

    /**
     *
     * @param publisher
     * @return self
     */
    setPublisher(publisher){
        this.publisher = publisher;
        return this;
    }

    /**
     *
     * @param {float}price
     * @return self
     */
    setPrice(price){
        this.price = price;
        return this
    }

    /**
     *
     * @param {int} id
     * @return self
     */
    setId(id){
        this.id = id;
        return this
    }

    /**
     *
     * @return {Object}
     */
    toJson(){
        return {

        };
    }
}

module.exports = Book;
