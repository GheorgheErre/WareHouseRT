import { TestBed } from '@angular/core/testing';

import { HistoricDeleteService } from './historic-delete.service';

describe('HistoricDeleteService', () => {
  let service: HistoricDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoricDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
