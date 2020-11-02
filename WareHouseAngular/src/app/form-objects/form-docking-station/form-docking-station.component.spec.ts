import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDockingStationComponent } from './form-docking-station.component';

describe('FormDockingStationComponent', () => {
  let component: FormDockingStationComponent;
  let fixture: ComponentFixture<FormDockingStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDockingStationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDockingStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
