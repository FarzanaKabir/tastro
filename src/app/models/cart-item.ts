import {User} from './user';
import {Coupon} from './coupon';

export interface CartItem {
    coupon: Coupon;
    id: string;
    user: User;
}
