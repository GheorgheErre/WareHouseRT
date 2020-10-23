import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWorkstationComponent } from './user-workstation.component';

describe('UserWorkstationComponent', () => {
  let component: UserWorkstationComponent;
  let fixture: ComponentFixture<UserWorkstationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserWorkstationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWorkstationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
