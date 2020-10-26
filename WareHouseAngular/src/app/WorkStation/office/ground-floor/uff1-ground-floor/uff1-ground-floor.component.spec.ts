import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uff1GroundFloorComponent } from './uff1-ground-floor.component';

describe('Uff1GroundFloorComponent', () => {
  let component: Uff1GroundFloorComponent;
  let fixture: ComponentFixture<Uff1GroundFloorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Uff1GroundFloorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Uff1GroundFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
