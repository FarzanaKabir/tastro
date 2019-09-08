import {Component, OnInit} from '@angular/core';

export interface Card {
  icon: string;
  text: string;
  title: string;
}

@Component({
  selector: 'app-tastro-for-business',
  templateUrl: './tastro-for-business.component.html',
  styleUrls: ['./tastro-for-business.component.scss']
})
export class TastroForBusinessComponent implements OnInit {
  cards: Card[] = [
    {
      title: 'Order Management',
      icon: '../../../assets/homepage/ico1.png',
      text: 'Testro brings you new customers and helps your regulars order more. See what changes…'
    },
    {
      title: 'Inventory Management',
      icon: '../../../assets/homepage/ico2.png',
      text: 'Testro brings you new customers and helps your regulars order more. See what changes…'
    },
    {
      title: 'User Engagement',
      icon: '../../../assets/homepage/ico3.png',
      text: 'Testro brings you new customers and helps your regulars order more. See what changes…'
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
