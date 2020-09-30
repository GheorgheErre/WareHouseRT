import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerSupplieListComponent } from './power-supplie-list.component';

describe('PowerSupplieListComponent', () => {
  let component: PowerSupplieListComponent;
  let fixture: ComponentFixture<PowerSupplieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowerSupplieListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerSupplieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
