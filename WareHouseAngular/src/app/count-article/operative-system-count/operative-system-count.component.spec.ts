import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperativeSystemCountComponent } from './operative-system-count.component';

describe('OperativeSystemCountComponent', () => {
  let component: OperativeSystemCountComponent;
  let fixture: ComponentFixture<OperativeSystemCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperativeSystemCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperativeSystemCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
