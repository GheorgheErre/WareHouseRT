import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRamComponent } from './form-ram.component';

describe('FormRamComponent', () => {
  let component: FormRamComponent;
  let fixture: ComponentFixture<FormRamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
