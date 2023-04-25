import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books/books.component';
import { BookStoreComponent } from './book-store.component';
import { BookComponent } from './book/book.component';
import { BookDetailsComponent } from './book-details/book-details.component';

@NgModule({
  declarations: [BookStoreComponent, BooksComponent, BookComponent, BookDetailsComponent],
  imports: [CommonModule],
  exports: [BooksComponent],
})
export class BookStoreModule {}
