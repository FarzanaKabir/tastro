import {Category} from './category';

export interface Ingredients {
  category: Category[];
  id: number;
  image: string;
  name: string;
  unitAmount: number;
  unitPrice: number;
}
