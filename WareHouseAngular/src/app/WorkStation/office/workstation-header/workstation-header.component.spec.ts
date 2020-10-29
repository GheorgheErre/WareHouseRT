import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkstationHeaderComponent } from './workstation-header.component';

describe('WorkstationHeaderComponent', () => {
  let component: WorkstationHeaderComponent;
  let fixture: ComponentFixture<WorkstationHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkstationHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkstationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
