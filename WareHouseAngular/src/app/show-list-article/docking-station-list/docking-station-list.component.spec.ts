import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockingStationListComponent } from './docking-station-list.component';

describe('DockingStationListComponent', () => {
  let component: DockingStationListComponent;
  let fixture: ComponentFixture<DockingStationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DockingStationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DockingStationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
