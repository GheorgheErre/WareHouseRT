import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCableComponent } from './form-cable.component';

describe('FormCableComponent', () => {
  let component: FormCableComponent;
  let fixture: ComponentFixture<FormCableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
