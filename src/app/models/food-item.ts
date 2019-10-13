import {Category} from './category';
import {Ingredients} from './ingredients';

export interface FoodItem {
  category: Category;
  id: number;
  image: string;
  ingredients: Ingredients;
  name: string;
  unitAmount: number;
}
