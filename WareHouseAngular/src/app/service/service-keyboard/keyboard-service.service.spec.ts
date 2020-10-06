import { TestBed } from '@angular/core/testing';

import { KeyboardServiceService } from './keyboard-service.service';

describe('KeyboardServiceService', () => {
  let service: KeyboardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeyboardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
