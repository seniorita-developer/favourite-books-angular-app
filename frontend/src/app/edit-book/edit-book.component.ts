import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  id: String;
  book: any = {};
  updateForm: FormGroup;

  constructor(private bookService: BookService, 
    private router: Router, private route: ActivatedRoute, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.updateForm = this.fb.group({
      title: ['', Validators.required],
      author: '',
      year: '',
      genre: '',
      review: ''
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.bookService.getBookById(this.id).subscribe(res => {
        this.book = res;
        this.updateForm.get('title').setValue(this.book.title);
        this.updateForm.get('author').setValue(this.book.author);
        this.updateForm.get('year').setValue(this.book.year);
        this.updateForm.get('genre').setValue(this.book.genre);
        this.updateForm.get('review').setValue(this.book.review);
      });
    });
  }

  updateBook(title, author, year, genre, review) {
    this.bookService.updateBook(this.id, title, author, year, genre, review).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }

}
