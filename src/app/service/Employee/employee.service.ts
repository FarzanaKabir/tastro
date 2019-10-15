import {Injectable} from '@angular/core';
import {Employee} from '../../models/employee';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = localStorage.getItem('ServerUrl');

  constructor(private http: HttpClient) {
  }

  Login(username: string, password: string): Observable<Employee> {
    return this.http.post<Employee>(`${this.url}users/authenticateLogin`, {Username: username, Password: password});
  }

  Logout() {
    let result = this.http.get(`${this.url}users/logout`);
    return result;
  }
}
