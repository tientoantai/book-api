const bookMaker = require('../http/middleware/bookMaker')
const BookController = require('../http/controller/book-controller');
var express = require('express');
var router = express.Router();
let bookController  = new BookController();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.post('/book', bookMaker, bookController.addBook);

router.get('/book/:id', bookController.getBook);

router.put('/book', bookMaker, bookController.updateBook);

router.delete('/book/:id', bookController.deleteBook);

module.exports = router;
