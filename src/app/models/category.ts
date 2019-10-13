import {FoodProcessingUnit} from './food-processing-unit';
import {Restaurant} from './restaurant';

export interface Category {
  categoryPurpose: string;
  foodProcessingUnit: FoodProcessingUnit;
  id: number;
  image: string;
  name: string;
  restaurant: Restaurant;

}
