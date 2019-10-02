import {Component, OnInit} from '@angular/core';

export interface Cart {
  image: string;
  name: string;
  price: string;

}

const ELEMENT_DATA: Cart[] = [
  {image: './assets/restaurant/photo6.png', name: 'subi meal', price: '$10.00'},
  {image: './assets/restaurant/photo5.png', name: 'subi meal', price: '$10.00'},
  {image: './assets/restaurant/photo4.png', name: 'subi meal', price: '$10.00'},
  {image: './assets/restaurant/photo3.png', name: 'subi meal', price: '$10.00'},
  {image: './assets/restaurant/photo2.png', name: 'subi meal', price: '$10.00'},
  {image: './assets/restaurant/photo1.png', name: 'subi meal', price: '$10.00'},
  {image: './assets/restaurant/photo6.png', name: 'subi meal', price: '$10.00'}
];

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  displayedColumns: string[] = ['quantity', 'image', 'name', 'price', 'action'];
  dataSource = ELEMENT_DATA;

  constructor() {
  }

  ngOnInit() {
  }

}
