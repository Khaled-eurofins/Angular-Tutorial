import { Component, OnInit } from '@angular/core';
import { BookStoreService } from '../book-store.service';
import { Book } from 'projects/book-app/src/types/Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  constructor(private bookStoreServie: BookStoreService) {}

  books: Book[] = [];

  ngOnInit(): void {
    this.books = this.bookStoreServie.getBooks();
  }
}
