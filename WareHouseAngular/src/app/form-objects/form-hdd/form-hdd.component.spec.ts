import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHddComponent } from './form-hdd.component';

describe('FormHddComponent', () => {
  let component: FormHddComponent;
  let fixture: ComponentFixture<FormHddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormHddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
