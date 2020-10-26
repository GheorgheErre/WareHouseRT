import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrAndSalesComponent } from './hr-and-sales.component';

describe('HrAndSalesComponent', () => {
  let component: HrAndSalesComponent;
  let fixture: ComponentFixture<HrAndSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrAndSalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrAndSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
