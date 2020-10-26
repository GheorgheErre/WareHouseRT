import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uff1FirstFloorComponent } from './uff1-first-floor.component';

describe('Uff1FirstFloorComponent', () => {
  let component: Uff1FirstFloorComponent;
  let fixture: ComponentFixture<Uff1FirstFloorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Uff1FirstFloorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Uff1FirstFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
