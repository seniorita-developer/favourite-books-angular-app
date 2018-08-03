import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Book } from './book';
import { BOOKS } from './book-list';

@Injectable()
export class BookService {
  getBooks(): Observable<Book[]> {
    return of(BOOKS);
  }
  constructor() { }

}
