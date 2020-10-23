import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkstationWelcomeComponent } from './workstation-welcome.component';

describe('WorkstationWelcomeComponent', () => {
  let component: WorkstationWelcomeComponent;
  let fixture: ComponentFixture<WorkstationWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkstationWelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkstationWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
