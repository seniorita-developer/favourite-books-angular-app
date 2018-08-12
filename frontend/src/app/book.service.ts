import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BookService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get(`${this.uri}/books`);
  };

  getBookById(id) {
    return this.http.get(`${this.uri}/books/${id}`);
  }
  
  addBook(title, author, year, genre, review) {
    const book = {
      title: title,
      author: author,
      year: year,
      genre: genre,
      review: review
    };
    return this.http.post(`${this.uri}/books/add`, book);
  }

  updateBook(id, title, author, year, genre, review) {
    const book = {
      title: title,
      author: author,
      year: year,
      genre: genre,
      review: review
    };
    return this.http.post(`${this.uri}/books/update/${id}`, book);
  }

  deleteBook(id) {
    return this.http.get(`${this.uri}/books/delete/${id}`);
  }

}
