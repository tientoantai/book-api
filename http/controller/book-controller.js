class BookController{

    addBook(req, res, next){
        let bookRepo = req.app.get('book.repo');
        bookRepo.save(req.book).then(function(result){
            res.status(201).json({message: 'Created!'});
        }).catch(next);
    }

    getBook(req, res, next){
        let bookRepo = req.app.get('book.repo');
        bookRepo.get(req.params.id).then(function(result){
            res.status(200).json(result.toJson());
        }).catch(next);
    }

    updateBook(req, res, next){
        let bookRepo = req.app.get('book.repo');
        bookRepo.save(req.book).then(function(result){
            res.status(200).json({messge: 'Updated!'});
        }).catch(next);
    }


}

module.exports = BookController;
