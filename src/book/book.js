
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
        return this;
    }

    /**
     *
     * @param {int} id
     * @return self
     */
    setId(id){
        this.id = id;
        return this;
    }

    /**
     *
     * @param {string}thumbnail
     * @return self
     */
    setThumbnail(thumbnail){
        this.thumbnail = thumbnail;
        return this;
    }

    /**
     *
     * @return {string}
     */
    getThumbnail(){
        return this.thumbnail;
    }

    /**
     *
     * @return {string}
     */
    getDescription(){
        return this.description;
    }

    /**
     *
     * @param {string}description
     * @return self
     */
    setDescription(description){
        this.description = description;
        return this;
    }

    /**
     *
     * @return {Object}
     */
    toJson(){
        return {
            id          : this.getId(),
            title       : this.getTitle(),
            author      : this.getAuthor(),
            publisher   : this.getPublisher(),
            price       : this.getPrice(),
            thumbnail   : this.getThumbnail(),
            description : this.getDescription(),
        };
    }
}

module.exports = Book;
