import { TestBed } from '@angular/core/testing';

import { MouseServiceService } from './mouse-service.service';

describe('MouseServiceService', () => {
  let service: MouseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MouseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
