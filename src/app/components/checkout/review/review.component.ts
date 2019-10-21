import {Component, OnInit} from '@angular/core';
import {CartItem} from '../../../models/cart-item';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  checkoutProducts: CartItem[];
  totalPrice: number = 0;

  constructor() {
    const products = JSON.parse(localStorage.getItem('Cart'));
    this.checkoutProducts = products;
    products.forEach((product) => {
      this.totalPrice += product.Price;
    });
  }

  ngOnInit() {
  }

}
