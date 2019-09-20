import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {retry, catchError} from 'rxjs/operators';
import {cityDetails, FoodItem} from '../typing';

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
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfTUFOQUdFUixST0xFX1VTRVIsUk9MRV9XQUlURVIiLCJleHAiOjE1NjkwNDcwOTJ9.mfBgtKZTphTOk_FwvwgpdvF3DB-zngdQC8HB_Wh5Z85GvnVQ9EzzJ8_9XoHh_wGvABZhuKQGJ9IDunEb4_xUhw'
    })
  };


  // HttpClient API get() method => Fetch food list
  getFoodItems(): Observable<FoodItem> {
    return this.http.get<FoodItem>(this.apiURL + '/food-items', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API get() method => Fetch food
  getFoodItem(id): Observable<FoodItem> {
    return this.http.get<FoodItem>(this.apiURL + '/food-items/' + id)
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
