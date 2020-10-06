import { TestBed } from '@angular/core/testing';

import { GraphicTabletServiceService } from './graphic-tablet-service.service';

describe('GraphicTabletServiceService', () => {
  let service: GraphicTabletServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphicTabletServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
