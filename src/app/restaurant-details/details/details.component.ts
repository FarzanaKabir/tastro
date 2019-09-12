import {Component, OnInit} from '@angular/core';

export interface Item {
  image: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  item1: Item[] = [
    {
      image: '../../../assets/restaurant/photo1.png',
      title: 'Beef Taco Subi',
      text: 'The new Taco Subi is filled with tasty Taco-flavored chicken of beef mince, crispy corn chips and the whole is crowned with Salsa sauce'
    },
    {
      image: '../../../assets/restaurant/photo2.png',
      title: 'Chikepia Quinoa Subi',
      text: 'The new Taco Subi is filled with tasty Taco-flavored chicken of beef mince, crispy corn chips and the whole is crowned with Salsa sauce'
    },
    {
      image: '../../../assets/restaurant/photo3.png',
      title: 'Remix Subi',
      text: 'The new Taco Subi is filled with tasty Taco-flavored chicken of beef mince, crispy corn chips and the whole is crowned with Salsa sauce'
    },
    {
      image: '../../../assets/restaurant/photo4.png',
      title: 'Chikepia Quinoa Subi Salad',
      text: 'The new Taco Subi is filled with tasty Taco-flavored chicken of beef mince, crispy corn chips and the whole is crowned with Salsa sauce'
    }
  ];

  item2: Item[] = [
    {
      image: '../../../assets/restaurant/photo5.png',
      title: 'Beef Taco Subi',
      text: 'The new Taco Subi is filled with tasty Taco-flavored chicken of beef mince, crispy corn chips and the whole is crowned with Salsa sauce'
    },
    {
      image: '../../../assets/restaurant/photo6.png',
      title: 'Chikepia Quinoa Subi',
      text: 'The new Taco Subi is filled with tasty Taco-flavored chicken of beef mince, crispy corn chips and the whole is crowned with Salsa sauce'
    },
    {
      image: '../../../assets/restaurant/photo7.png',
      title: 'Chikepia Quinoa Subi Salad',
      text: 'The new Taco Subi is filled with tasty Taco-flavored chicken of beef mince, crispy corn chips and the whole is crowned with Salsa sauce'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
