import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../models/user';
import {config} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = localStorage.getItem('ServerUrl');

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<User[]>(`${this.url}/account`);
  }

  register(user: User) {
    return this.http.post(`${this.url}/register`, user);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/account/${id}`);
  }
}
