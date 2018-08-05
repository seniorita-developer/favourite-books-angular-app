import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Book = new Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    Year: {
        type: Number
    },
    Genre: {
        type: String
    },
    Review: {
        type: String,
        default: 'Unrated'
    }
});

export default mongoose.model('Book', Book);