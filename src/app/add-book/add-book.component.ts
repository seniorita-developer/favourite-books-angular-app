import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  title = 'Add book';
  angForm: FormGroup;
  constructor(private bookservice: BookService, private fb: FormBuilder) {
    this.createForm();
   }
  createForm() {
    this.angForm = this.fb.group({
      title: ['', Validators.required ],
      author: ['', Validators.required ]
   });
  }
  ngOnInit() {
  }

}
