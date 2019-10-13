import {Country} from './country';

export interface City {
  country: Country;
  id: number;
  lattitude: number;
  longitude: number;
  name: string;
}
