import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWorkstationComponent } from './create-workstation.component';

describe('CreateWorkstationComponent', () => {
  let component: CreateWorkstationComponent;
  let fixture: ComponentFixture<CreateWorkstationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateWorkstationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWorkstationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
