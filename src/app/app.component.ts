import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: any = 'TYPESCRIPT';

  constructor() {}


  ngOnInit(): void {
    this.ulissesHeros('Buck Mulligan');
  }

  ulissesHeros(name: string = 'Stefan Dedalus', sex?: string): void {
    if (!sex) {
      sex = 'Man';
    }
    console.log(name, sex);
  }
}
