import { Injectable } from '@angular/core';
import { INews } from 'src/app/news/shared/interfaces/inews';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiURL = 'http://localhost:8080/api/news';

  constructor(private http : HttpClient) { }

  getAllNews(): Observable<INews[]> {
    return this.http.get<INews[]>(this.apiURL)
  }

  addNews(newNews: INews): Observable<INews> {
    return this.http.post<INews>(this.apiURL, newNews, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('An error occured:', error.error.message);
    }else{
      console.error(
        `Backend returned code ${error.status},` +
        `Body was: ${error.error}`
      );
    }
    return throwError(
      'Something bad happened, please try again later'
    );
  };
}
