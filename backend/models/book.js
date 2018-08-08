import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Book = new Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    year: {
        type: Number
    },
    genre: {
        type: String
    },
    review: {
        type: String
    }
});

export default mongoose.model('Book', Book);