import { TestBed } from '@angular/core/testing';

import { PowerSupplieService } from './power-supplie.service';

describe('PowerSupplieService', () => {
  let service: PowerSupplieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PowerSupplieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
