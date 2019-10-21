import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

import {Category} from '../../models/category';
import {HelpersService} from '../../helpers.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
url = localStorage.getItem('ServerUrl');
httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqYWhhbkBiYW5nbGEuY29tIiwiYXV0aCI6IlJPTEVfV0FJVEVSIiwiZXhwIjoxNTczOTA2NzIyfQ.jvFzCVccoXVDry4kpiwh_06U6bjluRC68Ed4MXzUf4UanKAPMkeY3RtI78IGtqY7COP-jA8l4lA-LN69Ko_FVA'
    })
  };
  constructor(
    private http: HttpClient,
    private helpers: HelpersService
  ) {
  }

  getCategories() {
    const url = `${this.url}categories`;

    return this.http
      .get<Category[]>(url, this.httpOptions)
      .pipe(
        catchError(err => this.helpers.showErrors(err))
      );

  }
}
