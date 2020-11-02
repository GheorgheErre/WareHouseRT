import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCellphoneComponent } from './form-cellphone.component';

describe('FormCellphoneComponent', () => {
  let component: FormCellphoneComponent;
  let fixture: ComponentFixture<FormCellphoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCellphoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCellphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
