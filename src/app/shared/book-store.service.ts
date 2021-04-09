import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/internal/operators';
import { Author, Book, Image } from './book';

@Injectable()
export class BookStoreService {

  private api = "https://bookstore21.s1810456022.student.kwmhgb.at/api";

  constructor(private http:HttpClient) { 

  }

  getAll():Observable<Array<Book>>{
    return this.http.get<Array<Book>>(`${this.api}/books`).
      pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  getSingle(isbn:string):Observable<Book>{
    return this.http.get<Book>(`${this.api}/book/${isbn}`).
      pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  remove(isbn:string):Observable<any>{
    return this.http.delete(`${this.api}/book/${isbn}`).
      pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  getAllSearch(searchTerm:string):Observable<Array<Book>>{
    return this.http.get<Array<Book>>(`${this.api}/books/search/${searchTerm}`).pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  private errorHandler(error:Error | any){
    return throwError(error);
  }

}