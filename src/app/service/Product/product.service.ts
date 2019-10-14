import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Paging} from '../../models/paging';
import {Product} from '../../models/product';
import {Observable} from 'rxjs';
import {ProductPagingData} from '../../models/product-paging-data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = localStorage.getItem('ServerUrl');
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfTUFOQUdFUixST0xFX1VTRVIsUk9MRV9XQUlURVIiLCJleHAiOjE1NzExMjI1MDd9.p8yYURH0GEGnned9PzKLyu5zpZfipCTTaidC_diLvWFw6m_TznuUb5Vrj0iM57H-IFsKfNxVTT2Trkz-ZlOB2A'
    })
  };

  constructor(private http: HttpClient) {
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
}
