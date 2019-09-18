import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {retry, catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RestaurantDetailsService {
  // Define API
  // apiURL = 'http://18.223.117.205:8080/api';

  constructor() {
  }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfTUFOQUdFUixST0xFX1VTRVIsUk9MRV9XQUlURVIiLCJleHAiOjE1Njg3ODUxOTl9.USfQ6rQocpWtoQ1FqC7vQe4bQKdgxVKTbN921xdeZ03A7jM7zD5Q4rUe2dVaoCNDlZdDvE8L92YXdcXiIEQ5rg'
  //   })
  // };

  // HttpClient API get() method => Fetch employees list
  // getFoodItems(): Observable<FoodItem> {
  //   return this.http.get<FoodItem>(this.apiURL + '/food-items', this.httpOptions)
  //     .pipe(
  //       retry(1),
  //       catchError(this.handleError)
  //     );
  // }

  // HttpClient API get() method => Fetch employee
  // getFoodItem(id): Observable<FoodItem> {
  //   return this.http.get<FoodItem>(this.apiURL + '/food-items/' + id)
  //     .pipe(
  //       retry(1),
  //       catchError(this.handleError)
  //     );
  // }

  // Error handling
  // handleError(error) {
  //   let errorMessage = '';
  //   if (error.error instanceof ErrorEvent) {
  //     // Get client-side error
  //     errorMessage = error.error.message;
  //   } else {
  //     // Get server-side error
  //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //   }
  //   window.alert(errorMessage);
  //   return throwError(errorMessage);
  // }
}
