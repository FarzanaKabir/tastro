import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../service/Shared/data.service';
import {Ingredients} from '../../../models/ingredients';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: Ingredients[] = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.cart.subscribe(a => this.cart = a);
  }

  getCartProductItems() {
    this.cart = JSON.parse(localStorage.getItem('Cart'));
  }

  onRemoveProductsFromCart(productId: number) {
    this.cart = this.cart.filter(a => a.ProductId !== productId);
    localStorage.setItem('Cart', JSON.stringify(this.cart));
    this.dataService.updateCartItemCount(this.cart.length);
    this.dataService.updateShoppingCart(this.cart);
  }

}
