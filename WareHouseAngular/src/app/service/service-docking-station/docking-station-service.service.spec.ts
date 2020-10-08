import { TestBed } from '@angular/core/testing';

import { DockingStationService } from './docking-station-service.service';

describe('DockingStationService', () => {
  let service: DockingStationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DockingStationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
