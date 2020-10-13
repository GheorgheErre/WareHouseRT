import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorCountComponent } from './monitor-count.component';

describe('MonitorCountComponent', () => {
  let component: MonitorCountComponent;
  let fixture: ComponentFixture<MonitorCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitorCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
