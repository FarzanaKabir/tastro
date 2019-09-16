import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {FoodItem} from '../typing';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestaurantDetailsService {

  constructor(private http: HttpClient) {
  }

  const;
  headers = new HttpHeaders()
    .set('X-CustomHeader', 'custom header value');

  getFoodItem() {
    let headers: HttpHeaders;
    headers = new HttpHeaders();
    return this
      .http
      .get(`${environment.apiBaseUrl}/food-items`, {headers});
  }
}

