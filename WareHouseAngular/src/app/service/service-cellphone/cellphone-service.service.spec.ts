import { TestBed } from '@angular/core/testing';

import { CellphoneServiceService } from './cellphone-service.service';

describe('CellphoneServiceService', () => {
  let service: CellphoneServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CellphoneServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
