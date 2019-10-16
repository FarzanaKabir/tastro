import {Component, OnInit} from '@angular/core';
import {CartItem} from '../../../models/cart-item';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.scss']
})
export class PaymentInfoComponent implements OnInit {

  checkoutProducts: CartItem[];
  totalPrice: number = 0;
  date: number;
  tax = 6.4;
  remark: string = '';

  constructor() {
    const products = JSON.parse(localStorage.getItem('Cart'));
    this.checkoutProducts = products;
    products.forEach((product) => {
      this.totalPrice += product.unitPrice;
    });
  }

  ngOnInit() {
  }

}
