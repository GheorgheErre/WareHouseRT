import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCPUComponent } from './form-cpu.component';

describe('FormCPUComponent', () => {
  let component: FormCPUComponent;
  let fixture: ComponentFixture<FormCPUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCPUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCPUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
