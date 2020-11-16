import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricMovementsListComponent } from './historic-movements-list.component';

describe('HistoricMovementsListComponent', () => {
  let component: HistoricMovementsListComponent;
  let fixture: ComponentFixture<HistoricMovementsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricMovementsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricMovementsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
