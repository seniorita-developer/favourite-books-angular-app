import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[];

  selectedBook: Book;

  constructor(private bookService: BookService)  { }

  ngOnInit() {
    this.bookService.getBooks().subscribe((books) => {
      console.log(books);
});
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }

}
