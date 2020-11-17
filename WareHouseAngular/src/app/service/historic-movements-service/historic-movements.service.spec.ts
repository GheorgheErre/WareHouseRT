import { TestBed } from '@angular/core/testing';

import { HistoricMovementsService } from './historic-movements.service';

describe('HistoricMovementsService', () => {
  let service: HistoricMovementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoricMovementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
