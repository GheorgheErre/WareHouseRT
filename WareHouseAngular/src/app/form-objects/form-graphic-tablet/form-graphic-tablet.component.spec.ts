import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGraphicTabletComponent } from './form-graphic-tablet.component';

describe('FormGraphicTabletComponent', () => {
  let component: FormGraphicTabletComponent;
  let fixture: ComponentFixture<FormGraphicTabletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGraphicTabletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGraphicTabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
