import { Component } from '@angular/core';
import { CashDataService } from './services/cash-data.service';
import { Cash } from './entities/cash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  private data: Cash[];   //All data cash from server
  private itemsPerPage: Cash[];    //Data cash for one page
  private elementsPerPage: number = 10;    //Number of items per page
  private currentPage: number = 1;

  constructor (
    private cashDataService: CashDataService
  ) {  }

  ngOnInit() {
    this.data = this.cashDataService.getData();
    this.setItemsPerPage(this.currentPage);
  }

  addItem(item: Cash) {
    this.data.push(item);
    this.cashDataService.addData(item);
    this.setItemsPerPage(this.currentPage);
  }

  private setItemsPerPage(page: number) {

    this.itemsPerPage = [];
    let currentElement = this.elementsPerPage * (page - 1);

    while (this.data[currentElement] && this.itemsPerPage.length != this.elementsPerPage) {
      this.itemsPerPage.push(this.data[currentElement++]);
    }
  }
}
