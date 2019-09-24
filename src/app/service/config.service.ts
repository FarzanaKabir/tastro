import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {retry, catchError} from 'rxjs/operators';
import {cityDetails, foodItem} from '../typing';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  // Define API
  apiURL = 'http://18.223.117.205:8080/api';

  constructor(private http: HttpClient) {
  }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfTUFOQUdFUixST0xFX1VTRVIsUk9MRV9XQUlURVIiLCJleHAiOjE1NjkzOTY5MzJ9.X6roC9Ykw4kRQK16dVhqGDdZPGyIQs2CPtJV1lbq9a-DqEYa_eKIj8DvOoPKYdi-jG1iA4rbH_JBTHsQbbOAEg',
    })
  };


  // HttpClient API get() method => Fetch food list
  getFoodItems(): Observable<foodItem> {
    return this.http.get<foodItem>(this.apiURL + '/food-items', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API get() method => Fetch food
  getFoodItem(id): Observable<foodItem> {
    return this.http.get<foodItem>(this.apiURL + '/food-items/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getCountry(): Observable<cityDetails> {
    return this.http.get<cityDetails>(this.apiURL + '/country')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
