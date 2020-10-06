import { TestBed } from '@angular/core/testing';

import { OperativeSystemServiceService } from './operative-system-service.service';

describe('OperativeSystemServiceService', () => {
  let service: OperativeSystemServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperativeSystemServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
