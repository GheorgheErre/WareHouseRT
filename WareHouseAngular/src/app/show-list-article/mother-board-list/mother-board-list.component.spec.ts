import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotherBoardListComponent } from './mother-board-list.component';

describe('MotherBoardListComponent', () => {
  let component: MotherBoardListComponent;
  let fixture: ComponentFixture<MotherBoardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotherBoardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotherBoardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
