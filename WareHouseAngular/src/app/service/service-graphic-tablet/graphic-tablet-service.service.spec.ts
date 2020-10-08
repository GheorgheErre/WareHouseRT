import { TestBed } from '@angular/core/testing';

import { GraphicTabletService } from './graphic-tablet-service.service';

describe('GraphicTabletService', () => {
  let service: GraphicTabletService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphicTabletService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
