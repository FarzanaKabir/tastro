
export interface FoodItem {
  id: number;
  name: string;
  image: string;
  unitAmount: number;
  category: foodCategory[];
  foodProcessingUnit: foodProcessing[];
  ingredients: string;
}

export interface foodCategory {
  id: number;
  name: string;
  image: string;
  restaurant: restaurantDetails[];
  user: number;
  openingTime: number;
  closingTime: number;
  offDay: number;
}

export interface restaurantDetails {
  id: number;
  name: string;
  lattitude: number;
  longitude: number;
  address: string;
  postalCode: number;
  contactNo: number;
  email: string;
  city: cityDetails[];
}

export interface cityDetails {
  id: number;
  name: string;
  lattitude: number;
  longitude: number;
  country: countryDetails[];
}

export interface countryDetails {
  id: number;
  name: string;
  isoCode: string;
  capital: string;
  callingCode: string;
}

export interface foodProcessing {
  id: number;
  name: string;
  iconIamge: string;
  iconIamgeContentType: string;
  restaurant: string;
  user: userDetails[];
  categoryPurpose: string;
  special: string;
}

export interface userDetails {
  id: number;
  login: string;
  firstName: string;
  lastName: string;
  email: string;
  activated: string;
  langKey: string;
  imageUrl: string;
  resetDate: string;
}
