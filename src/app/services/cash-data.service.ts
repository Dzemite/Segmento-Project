import { Injectable } from '@angular/core';
import { Cash } from '../entities/cash';

@Injectable()
export class CashDataService {

  private lastIndex = data.length;
  private total: number;

  constructor() { }

  public getData() {
    return data;
  }

  public getTotal(): number {
    this.total = 0;
    data.forEach(element => {
      this.total += element.cash;
    });

    return this.total;
  }

  public addData(item: Cash) {
    item.id = ++this.lastIndex;
    data.push(item);
  }

  public editData(item: Cash) {
    if (!item.id) return;console.log('edit ' + item.id);

    data.forEach(element => {
      if (element.id === item.id) {
        data[element.id - 1] = item;
      }
    });
  }
}

let data: Cash[] = [
  {
    id: 1,
    cash: 1000.00,
    description: "Комментарий 1"
  },
  {
    id: 2,
    cash: -300.00,
    description: "Комментарий 2"
  },
  {
    id: 3,
    cash: 400.00,
    description: "Комментарий 3"
  },
  {
    id: 4,
    cash: 400.00,
    description: "Комментарий 4"
  },
  {
    id: 5,
    cash: 400.00,
    description: "Комментарий 5"
  },
  {
    id: 6,
    cash: 400.00,
    description: "Комментарий 6"
  },
  {
    id: 7,
    cash: 400.00,
    description: "Комментарий 7"
  },
  {
    id: 8,
    cash: 400.00,
    description: "Комментарий 8"
  },
  {
    id: 9,
    cash: 400.00,
    description: "Комментарий 9"
  }
];
