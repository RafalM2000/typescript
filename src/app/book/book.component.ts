import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  bookTitle = 'Ulisses';
  bookAuthor = 'James Joyce';

  constructor() { }

  ngOnInit(): void {
  }

  getAuthor(): string {
    return this.bookAuthor;
  }

}
