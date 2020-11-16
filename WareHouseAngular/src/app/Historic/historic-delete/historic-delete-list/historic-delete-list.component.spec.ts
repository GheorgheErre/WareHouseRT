import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricDeleteListComponent } from './historic-delete-list.component';

describe('HistoricDeleteListComponent', () => {
  let component: HistoricDeleteListComponent;
  let fixture: ComponentFixture<HistoricDeleteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricDeleteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricDeleteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
