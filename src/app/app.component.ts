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

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfTUFOQUdFUixST0xFX1VTRVIsUk9MRV9XQUlURVIiLCJleHAiOjE1NzEzODI3ODd9.uHHHWVS8achpk2EaUcnNlKDgRdzNdoz73OixP6veRb6xcoAvbBA0u37Cj9FlU48sxQavCcnaIATY-BNNBsNJjg'
    })
  };
}
