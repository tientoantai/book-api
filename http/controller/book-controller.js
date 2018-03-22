class BookController{

    getBook(req, res, next){
        let bookRepo = req.app.get('book.repo');
        bookRepo.get(req.params.id).then(function(result){
            res.status(200).json(result);
        }).catch(next);
    }

    addBook(req, res, next){
        let bookRepo = req.app.get('book.repo');
        bookRepo.save(req.book).then(function(result){
            res.status(201)
        }).catch(next);
    }

}

module.exports = BookController;
