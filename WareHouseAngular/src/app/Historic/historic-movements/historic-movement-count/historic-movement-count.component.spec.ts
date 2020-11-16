import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricMovementCountComponent } from './historic-movement-count.component';

describe('HistoricMovementCountComponent', () => {
  let component: HistoricMovementCountComponent;
  let fixture: ComponentFixture<HistoricMovementCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricMovementCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricMovementCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
