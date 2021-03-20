import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
// import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private jsonURL = 'assets/config/books-list.json';

  constructor(private http: HttpClient) { }

  public getBooksList(): Observable<Book> {
    return this.http.get<Book>(this.jsonURL);
  }
}
