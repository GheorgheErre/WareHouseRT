import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTokenComponent } from './form-token.component';

describe('FormTokenComponent', () => {
  let component: FormTokenComponent;
  let fixture: ComponentFixture<FormTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
