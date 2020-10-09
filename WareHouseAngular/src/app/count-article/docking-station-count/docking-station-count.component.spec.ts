import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockingStationCountComponent } from './docking-station-count.component';

describe('DockingStationCountComponent', () => {
  let component: DockingStationCountComponent;
  let fixture: ComponentFixture<DockingStationCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DockingStationCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DockingStationCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
