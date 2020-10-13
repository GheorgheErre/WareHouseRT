import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperativeSystemListComponent } from './operative-system-list.component';

describe('OperativeSystemListComponent', () => {
  let component: OperativeSystemListComponent;
  let fixture: ComponentFixture<OperativeSystemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperativeSystemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperativeSystemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
