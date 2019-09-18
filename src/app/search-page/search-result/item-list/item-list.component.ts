import {Component, OnInit} from '@angular/core';

export interface ItemList {
  id: number;
  image: string;
  name: string;
  rating: string;
  country: string;
}

export interface tagList {
  button1: string;
  button2: string;
  button3: string;
}

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  foodItem: ItemList[] = [
    {
      id: 0,
      image: '../../../assets/search/Image1.png',
      name: 'Pizza Hut',
      rating: '125',
      country: 'Mämminiementie 69, TURKU',
    },
    {
      id: 1,
      image: '../../../assets/search/Image2.png',
      name: 'Hundi',
      rating: '125',
      country: 'Mämminiementie 69, TURKU',
    },
    {
      id: 2,
      image: '../../../assets/search/Image1.png',
      name: 'Hundi',
      rating: '125',
      country: 'Mämminiementie 69, TURKU',
    },
    {
      id: 3,
      image: '../../../assets/search/Image1.png',
      name: 'Pizza Hut',
      rating: '125',
      country: 'Mämminiementie 69, TURKU',
    },
    {
      id: 4,
      image: '../../../assets/search/Image2.png',
      name: 'Hundi',
      rating: '125',
      country: 'Mämminiementie 69, TURKU',
    },
    {
      id: 5,
      image: '../../../assets/search/Image1.png',
      name: 'Pizza Hut',
      rating: '125',
      country: 'Mämminiementie 69, TURKU',
    },
    {
      id: 6,
      image: '../../../assets/search/Image1.png',
      name: 'Hundi',
      rating: '125',
      country: 'Mämminiementie 69, TURKU',
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
