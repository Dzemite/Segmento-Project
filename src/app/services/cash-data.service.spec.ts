import { TestBed, inject } from '@angular/core/testing';

import { CashDataService } from './cash-data.service';

describe('CashDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CashDataService]
    });
  });

  it('should be created', inject([CashDataService], (service: CashDataService) => {
    expect(service).toBeTruthy();
  }));
});
