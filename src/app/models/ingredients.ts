import {Category} from './category';

export interface Ingredients {
  ProductId: number;
  category: Category[];
  id: number;
  image: string;
  name: string;
  unitAmount: number;
  unitPrice: number;

}
