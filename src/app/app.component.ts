import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  public total: number;

  constructor () {  }

  ngOnInit() {
    this.total = 0;
  }

  setTotal(total: number) {
      this.total = total;
  }
}
