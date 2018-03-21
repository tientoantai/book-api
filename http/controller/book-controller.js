class BookController{

    addBook(req, res, next){
        let bookRepo = req.app.get('book.repo');
        bookRepo.save(req.book).then(function(result){
            res.status(201)
        }).catch(next);
    }

}

module.exports = BookController;
