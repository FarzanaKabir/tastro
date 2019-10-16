import {Component, Input, OnInit} from '@angular/core';
import {PaginationService} from './pagination.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() perPage = 10;

  private pages: Observable<number[]>;
  private totalPageNumber: Observable<number>;
  private currentPage: Observable<number>;
  private totalItems: Observable<number>;

  constructor(
    private paginationService: PaginationService
  ) {
  }

  ngOnInit() {
    this.totalItems = this.paginationService.getTotalItems();
    this.currentPage = this.paginationService.getCurrentPage();
    this.totalPageNumber = this.paginationService.getTotalPageNumber();
    this.pages = this.paginationService.getPages();
  }

  private setPageNumber(page: number) {
    this.paginationService.setCurrentPage(page);
  }

}
