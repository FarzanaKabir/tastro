import {Restaurant} from './restaurant';
import {User} from './user';

export interface FoodProcessingUnit {
  iconIamge: string;
  iconIamgeContentType: string;
  id: number;
  name: string;
  restaurant: Restaurant[];
  user: User;
}
