import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOperativeSystemComponent } from './form-operative-system.component';

describe('FormOperativeSystemComponent', () => {
  let component: FormOperativeSystemComponent;
  let fixture: ComponentFixture<FormOperativeSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormOperativeSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormOperativeSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
