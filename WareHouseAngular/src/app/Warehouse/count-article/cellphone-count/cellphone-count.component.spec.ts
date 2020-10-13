import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellphoneCountComponent } from './cellphone-count.component';

describe('CellphoneCountComponent', () => {
  let component: CellphoneCountComponent;
  let fixture: ComponentFixture<CellphoneCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellphoneCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellphoneCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
