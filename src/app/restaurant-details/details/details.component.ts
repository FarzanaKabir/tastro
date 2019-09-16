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
  item1: Item[];

  constructor() {
  }

  ngOnInit() {

  }

}
