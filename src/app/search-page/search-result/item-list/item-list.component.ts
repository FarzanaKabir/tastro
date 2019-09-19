import {Component, OnInit} from '@angular/core';
import {ConfigService} from '../../../service/config.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  private Item: {};
  constructor(public restApi: ConfigService) {
  }

  ngOnInit() {
    this.getFooItems();
  }

  getFooItems() {
    this.Item = [];
    this.restApi.getFoodItems().subscribe((data: {}) => {
      console.log(data);
      this.Item = data;
    });
  }

  getImage(type: string = 'foodItem', image: string): string {
    return 'https://soft-box.s3.us-east-2.amazonaws.com/' + type + '/' + image;
  }

}
