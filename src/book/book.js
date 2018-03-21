
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

    getTitle(){
       return this.title;
    }

    getAuthor(){
        return this.author;
    }

    getPublisher(){
        return this.publisher;
    }

    getPrice(){
        return this.price;
    }

    setTitle(title){
        this.title = title;
        return this;
    }

    setAuthor(author){
        this.author = author;
        return this;
    }

    setPublisher(publisher){
        this.publisher = publisher;
        return this;
    }

    setPrice(price){
        this.price = price;
        return this
    }

    toJson(){
        return {

        };
    }

}