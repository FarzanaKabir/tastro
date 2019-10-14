import {User} from './user';
import {Coupon} from './coupon';

export interface CartItem {
  Price: number;
  ProductId: any;
  Quantity: number;
  coupon: Coupon;
  id: string;
  user: User;
}
