import {City} from './city';
import {User} from './user';

export interface Restaurant {
  address: string;
  city: City;
  closingTime: string;
  contactNo: string;
  email: string;
  id: number;
  lattitude: number;
  longitude: number;
  name: string;
  offDay: string;
  openingTime: string;
  postalCode: string;
  user: User;
}
