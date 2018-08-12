import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private bookService: BookService, private router: Router)  { }

  ngOnInit() {
    this.showBooks();
  }

  showBooks() {
    this.bookService
      .getBooks()
      .subscribe((data: Book[]) => {
        this.books = data;
        console.log('Data requested ...');
        console.log(this.books);
      });
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }
  editBook(id) {
    this.router.navigate([`/editBook/${id}`]);
}

  deleteBook(_id) {
    if(confirm("Are you sure to delete this item?")){
      this.bookService.deleteBook(_id).subscribe(() => {
        this.showBooks();
      });
    }
    
  }

}
