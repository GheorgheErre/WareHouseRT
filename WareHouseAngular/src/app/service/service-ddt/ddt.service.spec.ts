import { TestBed } from '@angular/core/testing';

import { DdtService } from './ddt.service';

describe('DdtService', () => {
  let service: DdtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DdtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
