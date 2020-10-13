import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpuCountComponent } from './gpu-count.component';

describe('GpuCountComponent', () => {
  let component: GpuCountComponent;
  let fixture: ComponentFixture<GpuCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpuCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GpuCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
