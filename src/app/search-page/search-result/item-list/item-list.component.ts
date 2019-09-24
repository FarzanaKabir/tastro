import {Component, Input, OnInit} from '@angular/core';
import {ConfigService} from '../../../service/config.service';
import {foodItem} from '../../../typing';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  @Input() Item: foodItem;
  // p: Number = 1;
  // count: Number = 5;

  constructor(public restApi: ConfigService) {
  }

  ngOnInit() {
    this.getFooItems();
  }

  getFooItems() {
    this.restApi.getFoodItems().subscribe((data: foodItem) => {
      console.log(data);
      this.Item = data;
    });
  }

  getImage(type: string = 'foodItem', image: string): string {
    return 'https://soft-box.s3.us-east-2.amazonaws.com/' + type + '/' + image;
  }

}
