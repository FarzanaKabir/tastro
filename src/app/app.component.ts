import {Component} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tastro';
  constructor() {
    const serverURL = 'http://18.223.117.205:8080/api/';
    localStorage.setItem('ServerUrl', serverURL);
  }
}
