import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Category} from '../../typings';
import {catchError} from 'rxjs/operators';
import {HelperService} from '../helpers.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient,
    private helpers: HelperService
  ) {
  }

  getCategories() {
    const url = `${environment.apiBaseUrl}category/`;

    return this.http
      .get<Category[]>(url)
      .pipe(
        catchError(err => this.helpers.showErrors(err))
      );

  }
}
