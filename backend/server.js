import express from 'express';
import cors from 'cors';
import bodyParser from'body-parser';
import mongoose from 'mongoose';

import Book from './models/book';

const app = express();

const router = express.Router();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/books', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Connected with MongoDB database');
});

router.route('/books').get((req, res) => {
    Book.find((err, books) => {
        if(err)
            console.log(err)
        else
            res.json(books);
    });
});

router.route('/books/:id').get((req, res) => {
    Book.findById(req.params.id, (err, book) => {
        if (err)
            console.log(err);
        else
            res.json(book);
    });
});

router.route('/books/add').post((req, res) => {
    let book = new Book(req.body);
    book.save()
        .then(book => {
            res.status(200).json({'book': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});

router.route('/books/delete/:id').get((req, res) => {
    Book.findByIdAndRemove({_id: req.params.id}, (err, book) => {
        if (err)
            res.json(err);
        else
            res.json('Remove successfully');
    })
})

router.route('/books/update/:id').post((req, res) => {
    Book.findById(req.params.id, (err, book) => {
        if (!book)
            return next(new Error('Could not load document'));
        else {
            book.title = req.body.title;
            book.author = req.body.author;
            book.year = req.body.year;
            book.genre = req.body.genre;
            book.review = req.body.review;

            book.save().then(book => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

app.use('/', router);
app.listen(4000, () => console.log('Express server on port 4000'));