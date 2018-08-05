import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from './book';
import { BOOKS } from './book-list';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BookService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get(`${this.uri}/books`);
  };
  
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

}
