import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

readonly book: {title: string, readonly author: string} = {title: 'Zbrodnia i Kara', author: 'Fiodor Dostojewski'};

  constructor() {
   }

  ngOnInit(): void {
    // this.book = {
    //   title: 'Anna Karenina',
    //   author: 'Lew Tołstoj'
    //   };

    // this.book.author = 'F.D';
  }

  // getAuthor(): string {
  //   return this.book.author;
  // }

}
