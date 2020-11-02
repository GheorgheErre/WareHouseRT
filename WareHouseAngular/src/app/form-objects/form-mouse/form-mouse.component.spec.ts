import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMouseComponent } from './form-mouse.component';

describe('FormMouseComponent', () => {
  let component: FormMouseComponent;
  let fixture: ComponentFixture<FormMouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
