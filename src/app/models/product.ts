import {Category} from './category';
import {Ingredients} from './ingredients';

export interface Product {
  ProductId: any;
  category: Category;
  id: number;
  image: string;
  ingredients: Ingredients;
  name: string;
  unitAmount: number;
}
