import { Component, OnInit } from '@angular/core';
import { BookComponent } from './book/book.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: any = 'TYPESCRIPT';

  ngOnInit(): void {
  }
}
