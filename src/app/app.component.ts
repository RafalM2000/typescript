import { Component, OnInit } from '@angular/core';
import { BookComponent } from './book/book.component';
import { BookslistService } from './bookslist.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BookComponent implements OnInit {
  title: any = 'TYPESCRIPT';
  constructor(books: BookslistService) {
    super(books);
  }


  ngOnInit(): void {
    this.ulissesHeros('Buck Mulligan');
  }

  ulissesHeros(name: string = 'Stefan Dedalus', sex?: string): void {
    if (!sex) {
      sex = 'Man';
    }
    console.log('AppComponent ---> ', name, sex, 'BookComponent ---> ', this.bookTitle,  this.getAuthor(),
    'BooksListService ---->', this.books.booksList
    );
  }
}
