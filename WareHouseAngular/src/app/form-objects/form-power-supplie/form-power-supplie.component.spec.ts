import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPowerSupplieComponent } from './form-power-supplie.component';

describe('FormPowerSupplieComponent', () => {
  let component: FormPowerSupplieComponent;
  let fixture: ComponentFixture<FormPowerSupplieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPowerSupplieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPowerSupplieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
