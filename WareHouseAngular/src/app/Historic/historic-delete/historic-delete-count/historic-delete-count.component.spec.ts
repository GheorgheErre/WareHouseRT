import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricDeleteCountComponent } from './historic-delete-count.component';

describe('HistoricDeleteCountComponent', () => {
  let component: HistoricDeleteCountComponent;
  let fixture: ComponentFixture<HistoricDeleteCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricDeleteCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricDeleteCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
