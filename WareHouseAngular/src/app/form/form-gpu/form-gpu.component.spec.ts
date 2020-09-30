import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGpuComponent } from './form-gpu.component';

describe('FormGpuComponent', () => {
  let component: FormGpuComponent;
  let fixture: ComponentFixture<FormGpuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGpuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGpuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
