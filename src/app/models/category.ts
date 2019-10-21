import {FoodProcessingUnit} from './food-processing-unit';
import {Ingredients} from './ingredients';

export interface Category {
  categoryPurpose: string;
  foodProcessingUnit: FoodProcessingUnit;
  id: number;
  image: string;
  name: string;
  ingredients: Ingredients[];
}
