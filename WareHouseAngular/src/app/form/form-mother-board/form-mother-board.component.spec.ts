import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMotherBoardComponent } from './form-mother-board.component';

describe('FormMotherBoardComponent', () => {
  let component: FormMotherBoardComponent;
  let fixture: ComponentFixture<FormMotherBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMotherBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMotherBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
