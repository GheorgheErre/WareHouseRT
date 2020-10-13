import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerSupplieCountComponent } from './power-supplie-count.component';

describe('PowerSupplieCountComponent', () => {
  let component: PowerSupplieCountComponent;
  let fixture: ComponentFixture<PowerSupplieCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowerSupplieCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerSupplieCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
