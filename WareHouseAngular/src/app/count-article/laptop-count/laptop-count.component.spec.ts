import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopCountComponent } from './laptop-count.component';

describe('LaptopCountComponent', () => {
  let component: LaptopCountComponent;
  let fixture: ComponentFixture<LaptopCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaptopCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
