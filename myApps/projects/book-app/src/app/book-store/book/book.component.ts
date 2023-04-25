import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'projects/book-app/src/types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  @Input() book: Book = {} as Book;

  constructor() {}

  ngOnInit(): void {}

  handleOnAddToCart() {
    console.log(this.book);
  }

  handleOnClickBook() {
    console.log('Card Clicked');
  }
}
