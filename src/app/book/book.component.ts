import { Component, OnInit } from '@angular/core';
import { BookslistService } from '../bookslist.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  bookTitle = 'Ulisses';
  bookAuthor = 'James Joyce';

  constructor(public books: BookslistService) { }

  ngOnInit(): void {
    console.log('booksList--->', this.books.booksList);
  }

  getAuthor(): string {
    return this.bookAuthor;
  }

}
