import { Component, OnInit, ViewChild, EventEmitter, Output, Input, ElementRef } from '@angular/core';
import { CashDataService } from '../services/cash-data.service';
import { Cash } from '../entities/cash';
import { ModalDirective } from 'angular-bootstrap-md';

enum sorts {
  id = 1,
  cashDirect = 2,
  cashReverce = -2
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit{

  public cashRecord: Cash = new Cash(undefined, undefined, undefined);
  public itemsPerPage: Cash[];              //Data cash for one page
  public pagesArray: number[] = [];         //For pagination
  public currentPage: number = 0;

  private data: Cash[];                     //All data cash from server
  private elementsPerPage: number = 10;     //Number of items per page
  private numberOfPages: number;            //Number of pages


  private sortType: number;

  @ViewChild('cashModal')
  modal: ModalDirective;
  @ViewChild('cash')
  cashRef: ElementRef;
  @ViewChild('desc')
  descRef: ElementRef;

  @Input()
  totalCash: number;
  @Output()
  totalChange = new EventEmitter<number>();

  constructor(
    private cashDataService: CashDataService
  ) { }

  ngOnInit() {
    this.data = this.cashDataService.getData();

    this.recalculateNumberOfPages();
    this.setItemsPerPage();
    this.recalculateTotal();
  }

  private setItemsPerPage() {

    this.itemsPerPage = [];
    let currentElement = this.elementsPerPage * this.currentPage;

    while (this.data[currentElement] && this.itemsPerPage.length != this.elementsPerPage) {
      this.itemsPerPage.push(this.data[currentElement++]);
    }
  }

  recalculateNumberOfPages() {
    this.numberOfPages = Math.ceil(this.data.length / this.elementsPerPage);
    for (let i = 0; i < this.numberOfPages; i++) {
      this.pagesArray[i] = i + 1;
    }
  }

  changePage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.setItemsPerPage();
  }

  recalculateTotal() {
    this.totalCash = 0;
    this.totalCash = this.cashDataService.getTotal();

    this.totalChange.emit(this.totalCash);
  }

  sortByIndex() {
    if (!this.data) return;

    this.data.sort((a, b) => {
      return a.id - b.id;
    });
    this.setItemsPerPage();
    this.sortType = sorts.id;

  }
  sortByCash() {
    if (!this.data) return;

    let type: number = 0;
    (this.sortType === sorts.cashDirect) ? type = sorts.cashReverce : type = sorts.cashDirect;
    this.data.sort((a: Cash, b: Cash) => {
      return type * ( a.cash - b.cash );
    });
    this.setItemsPerPage();
    this.sortType = type;
  }

  // Functions for modal dialog
  showModal() {
    this.cashRecord = new Cash(undefined, undefined, undefined);

    this.modal.show();
  }

  showEditModal(item: Cash) {
    this.cashRecord = new Cash(item.id, item.cash, item.description);

    this.modal.show();
  }

  hideModal() {
    this.modal.hide();
  }

  onSubmit() {
    if (!this.cashRecord.cash && !this.cashRecord.description)
      return;

    let tmpCash: Cash = new Cash(this.cashRecord.id, this.cashRecord.cash, this.cashRecord.description);

    tmpCash.id ? this.editItem(tmpCash) : this.addItem(tmpCash);

    this.modal.hide();
    this.recalculateTotal();
  }


  private addItem(item: Cash) {
    this.cashDataService.addData(item);
    this.setItemsPerPage();
    this.recalculateNumberOfPages();
  }

  private editItem(item: Cash) {
    this.cashDataService.editData(item);
    this.setItemsPerPage();
  }
  // Functions for modal dialog

}
