import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Category} from '../../models/category';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url = localStorage.getItem('ServerUrl');
  constructor(private http: HttpClient) { }

  // getCategories(): Observable<Category[]>{
  //   return this.http.get<Category[]>(`${this.url}category`);
  // }
}
