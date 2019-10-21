import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Ingredients} from '../../models/ingredients';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private message = new BehaviorSubject('default');
  currentMessage = this.message.asObservable();
  private ItemCount = new BehaviorSubject(0);
  count: Observable<number> = this.ItemCount.asObservable();
  private shoppingCart = new BehaviorSubject([]);
  cart = this.shoppingCart.asObservable();

  constructor() {
    const isEmptyCart: boolean = localStorage.getItem('Cart') == null;
    this.updateCartItemCount(isEmptyCart ? 0 : JSON.parse(localStorage.getItem('Cart')).length);
    this.updateShoppingCart(isEmptyCart ? [] : JSON.parse(localStorage.getItem('Cart')));
  }

  changeMessage(message: string) {
    this.message.next(message);
  }

  updateCartItemCount(count: number) {
    this.ItemCount.next(count);
  }

  updateShoppingCart(cartItems: Ingredients[]) {
    this.shoppingCart.next(cartItems);
  }
}
