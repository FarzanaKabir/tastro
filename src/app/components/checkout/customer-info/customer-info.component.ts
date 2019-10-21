import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/user';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss']
})
export class CustomerInfoComponent implements OnInit {

  customerInfo: User;

  constructor() {
  }

  ngOnInit() {
    this.customerInfo = JSON.parse(localStorage.getItem('user'));
  }

}
