import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Paging} from '../../models/paging';
import {Product} from '../../models/product';
import {Observable} from 'rxjs';
import {ProductPagingData} from '../../models/product-paging-data';
import {Ingredients} from '../../models/ingredients';
import {catchError} from 'rxjs/operators';
import {HelpersService} from '../../helpers.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = localStorage.getItem('ServerUrl');
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqYWhhbkBiYW5nbGEuY29tIiwiYXV0aCI6IlJPTEVfV0FJVEVSIiwiZXhwIjoxNTczOTA2NzIyfQ.jvFzCVccoXVDry4kpiwh_06U6bjluRC68Ed4MXzUf4UanKAPMkeY3RtI78IGtqY7COP-jA8l4lA-LN69Ko_FVA'
    })
  };

  constructor(private http: HttpClient, private helpers: HelpersService) {
  }

  geProductByDepartmentId(paging: Paging): Observable<Product[]> {
    return this.http.post<Product[]>(`${this.url}department/getDepartments`, this.httpOptions);
  }

  getProductList(paging: Paging): Observable<ProductPagingData> {
    return this.http.post<ProductPagingData>(`${this.url}product/getFilteredProducts`, this.httpOptions);
  }

  getProductDetailsById(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.url}product/getProductDetails?productId=${productId}`, this.httpOptions);
  }

  getProducts() {
    return this.http.get<Ingredients>(`${this.url}food-items`, this.httpOptions);
  }
}
