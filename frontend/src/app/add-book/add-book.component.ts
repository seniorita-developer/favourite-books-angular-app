import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';
import { BookService } from '../book.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  header = 'Add book';

  addForm: FormGroup;
  constructor(private bookService: BookService, private fb: FormBuilder, private router: Router) {
    this.createForm();
   }
  createForm() {
    this.addForm = new FormGroup({
      title: new FormControl(),
      author: new FormControl(),
      year: new FormControl(),
      genre: new FormControl(),
      review: new FormControl()
   });
  }

  addBook(title, author, year, genre, review) {
    this.bookService.addBook(title, author, year, genre, review).subscribe(() => {
      this.router.navigate(['/']);
    });
}

  ngOnInit() {
  }

}
