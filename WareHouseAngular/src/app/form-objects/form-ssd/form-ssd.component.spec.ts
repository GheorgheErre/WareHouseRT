import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSsdComponent } from './form-ssd.component';

describe('FormSsdComponent', () => {
  let component: FormSsdComponent;
  let fixture: ComponentFixture<FormSsdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSsdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSsdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
