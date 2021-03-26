import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookslistService {

  constructor() { }

booksList = [
    {author: 'Olga Tokarczuk', title: 'Bieguni'},
    {author: 'Michel Houellebecq', title: 'Mapa i terytorium'},
    {author: 'Lew Tołstoj', title: 'Anna Karenina'},
    {author: 'Szczepan Twardoch', title: 'Morfina'},
    {author: 'Fiodor Dostojewski', title: 'Zbrodnia i kara'},
  ];
}
