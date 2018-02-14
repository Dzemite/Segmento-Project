import { Injectable } from '@angular/core';
import { Cash } from '../entities/cash';

@Injectable()
export class CashDataService {

  constructor() { }

  public getData() {
    return data;
  }

  public addData(item: Cash) {
    data.push(item);
  }

}

let data: Cash[] = [
  {
    id: 0,
    cash: 1000.00,
    description: "Комментарий 1"    
  },
  {
    id: 1,
    cash: -300.00,
    description: "Комментарий 2"
  },
  {
    id: 2,
    cash: 400.00,
    description: "Комментарий 3"
  }
];