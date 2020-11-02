import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormKeyboardComponent } from './form-keyboard.component';

describe('FormKeyboardComponent', () => {
  let component: FormKeyboardComponent;
  let fixture: ComponentFixture<FormKeyboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormKeyboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
