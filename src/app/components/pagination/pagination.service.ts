import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {range} from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  private numberOfButtonsPerPage = 5;
  private currentPage = new BehaviorSubject(1);
  private totalItems = new BehaviorSubject(0);
  private perPage = new BehaviorSubject(10);
  private totalPageNumber = new BehaviorSubject(0);
  private pages = new BehaviorSubject([]);

  constructor() {
  }

  getCurrentPage() {
    return this.currentPage.asObservable();
  }

  setCurrentPage(page: number) {
    this.currentPage.next(page);
  }

  getTotalItems() {
    return this.totalItems.asObservable();
  }

  setTotalItems(total: number) {
    if (this.numberOfButtonsPerPage < total) {
      this.pages.next(range(1, this.numberOfButtonsPerPage + 1));
    } else {
      this.pages.next(range(1, total + 1));
    }

    this.totalPageNumber.next(Math.ceil(total / this.perPage.getValue()));
    this.totalItems.next(total);
  }

  getTotalPageNumber() {
    return this.totalPageNumber.asObservable();
  }

  getPages() {
    return this.pages.asObservable();
  }
}
