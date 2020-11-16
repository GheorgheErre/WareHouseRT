import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricWelcomeComponent } from './historic-welcome.component';

describe('HistoricWelcomeComponent', () => {
  let component: HistoricWelcomeComponent;
  let fixture: ComponentFixture<HistoricWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricWelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
