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
            res.status(200).json({message: 'Updated!'});
        }).catch(next);
    }

    deleteBook(req, res, next){
        let bookRepo = req.app.get('book.repo');
        bookRepo.remove(req.params.id).then(function(result){
            res.status(200).json({message: 'Deleted!'});
        }).catch(next);
    }

    allBook(req, res, next){
            let bookRepo = req.app.get('book.repo');
            bookRepo.all().then(function(books){
                res.status(200).json(books.map(book => {
                    return book.toJson();
                }));
            }).catch(next);
        }

}

module.exports = BookController;
