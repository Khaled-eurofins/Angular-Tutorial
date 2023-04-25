import { Injectable } from '@angular/core';
import { BOOKS } from '../../constants/books';
import { Book } from '../../types/Book';

@Injectable({
  providedIn: 'root',
})
export class BookStoreService {
  constructor() {}

  getBooks(): Book[] {
    return BOOKS;
  }
}
