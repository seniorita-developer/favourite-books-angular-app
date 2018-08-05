import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Book } from './book';
import { BOOKS } from './book-list';

@Injectable()
export class BookService {
  getBooks(): Observable<Book[]> {
    return of(BOOKS);
  }
  constructor() { }

}
