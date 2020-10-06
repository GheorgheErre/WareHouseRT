import { TestBed } from '@angular/core/testing';

import { DockingStationServiceService } from './docking-station-service.service';

describe('DockingStationServiceService', () => {
  let service: DockingStationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DockingStationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
